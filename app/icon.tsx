import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1d9e75",
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", color: "#ffffff", fontSize: 18, fontWeight: 800 }}>
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
