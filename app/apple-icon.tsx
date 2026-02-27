import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        borderRadius: 40,
        background: "linear-gradient(135deg, #062056, #0a0a0a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "3px solid #38bdf8",
      }}
    >
      <span
        style={{
          fontSize: 110,
          fontWeight: 800,
          color: "#38bdf8",
          lineHeight: 1,
        }}
      >
        N
      </span>
    </div>,
    { ...size },
  );
}
