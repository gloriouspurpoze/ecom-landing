import { ImageResponse } from "next/og";

export const alt =
  "Torq Orbit — Zero-commission online ordering for restaurants and home kitchens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand + badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: "#0a0a0a" }}>Torq</span>
            <span style={{ color: "#1d9e75" }}>Orbit</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e1f5ee",
              color: "#0f6e56",
              border: "1px solid rgba(29,158,117,0.3)",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Zero commission. Always.
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#0a0a0a",
            }}
          >
            Online ordering for your
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#1d9e75",
              marginTop: 4,
            }}
          >
            business.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#6b6b6b",
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            Build a branded store in 2 minutes. Take orders on WhatsApp. Keep 100% of every rupee.
          </div>
        </div>

        {/* Bottom: trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e5e0",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "#6b6b6b" }}>
            Restaurants · Cloud kitchens · Home bakers · Tiffin services
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "#0a0a0a" }}>
            orbit.torqstudio.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
