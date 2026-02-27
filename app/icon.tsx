import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "linear-gradient(135deg, #062056, #0a0a0a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1.5px solid #38bdf8",
      }}
    >
      <span
        style={{
          fontSize: 20,
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
