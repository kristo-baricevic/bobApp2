import React from "react";

function getDrivePreviewSrc(link) {
  if (!link) return "";

  const m1 = link.match(/\/file\/d\/([^/]+)/);
  if (m1?.[1]) return `https://drive.google.com/file/d/${m1[1]}/preview`;

  const m2 = link.match(/[?&]id=([^&]+)/);
  if (m2?.[1]) return `https://drive.google.com/file/d/${m2[1]}/preview`;

  return link;
}

export default function DriveEmbedBox({ link }) {
  const src = getDrivePreviewSrc(link);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 900,
        height: 520,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <iframe
        src={src}
        style={{ width: "100%", height: "100%", border: 0 }}
        allow="autoplay"
        title={link}
      />
    </div>
  );
}
