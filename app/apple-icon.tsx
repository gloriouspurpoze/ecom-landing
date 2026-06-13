import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1d9e75",
          borderRadius: 36,
        }}
      >
        <div style={{ display: "flex", color: "#ffffff", fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
