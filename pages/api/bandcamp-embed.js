import { NextResponse } from "next/server";

function decodeHtmlEntities(s) {
  return s
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

export default async function handler(req, res) {
  const url = req.query?.url;

  if (!url) {
    res.status(400).json({ error: "Missing url" });
    return;
  }

  let pageRes;
  try {
    pageRes = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
    });
  } catch {
    res.status(502).json({ error: "Failed to fetch Bandcamp page" });
    return;
  }

  if (!pageRes.ok) {
    res
      .status(502)
      .json({ error: `Bandcamp fetch failed (${pageRes.status})` });
    return;
  }

  const html = await pageRes.text();

  const metaMatch = html.match(
    /<meta[^>]+name=["']bc-page-properties["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );

  if (!metaMatch) {
    res.status(422).json({ error: "Could not find bc-page-properties" });
    return;
  }

  const decoded = decodeHtmlEntities(metaMatch[1]);

  let props;
  try {
    props = JSON.parse(decoded);
  } catch {
    res.status(422).json({ error: "Could not parse bc-page-properties JSON" });
    return;
  }

  const type =
    props.item_type === "a" ? "album" : props.item_type === "t" ? "track" : "";
  const itemId = props.item_id;

  if (!type || !itemId) {
    res.status(422).json({ error: "Missing item_type or item_id" });
    return;
  }

  const titleMatch = html.match(
    /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );
  const title = titleMatch ? decodeHtmlEntities(titleMatch[1]) : "";

  const embedSrc = `https://bandcamp.com/EmbeddedPlayer/${type}=${itemId}/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/`;

  res.status(200).json({ embedSrc, title, href: url });
}
