import React, { useEffect, useState } from "react";

export default function Album({ link }) {
  const [embedSrc, setEmbedSrc] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setError("");
        setEmbedSrc("");

        const res = await fetch(
          `/api/bandcamp-embed?url=${encodeURIComponent(link)}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data?.error || "Failed to load embed");
        if (cancelled) return;

        setEmbedSrc(data.embedSrc);
        setTitle(data.title || "");
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load embed");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [link]);

  if (error) {
    return (
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
    );
  }

  if (!embedSrc) return <div>Loading…</div>;

  return (
    <iframe
      style={{ border: 0, width: 350, height: 470 }}
      src={embedSrc}
      seamless
      title={title || link}
    />
  );
}
