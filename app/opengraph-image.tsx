import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

// OG predogled (1200x630) ob deljenju na LinkedIn / messenger / Slack.
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${personal.name} – ${personal.title}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,92,255,0.35), transparent 45%), radial-gradient(circle at 85% 70%, rgba(34,211,238,0.25), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a78bfa",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 16 }}>
          {personal.name}
        </div>
        <div style={{ fontSize: 40, color: "#cbd5e1", marginTop: 8 }}>
          {personal.title}
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 40 }}>
          {personal.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
