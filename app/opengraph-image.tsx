import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jason James Sta. Rita - Web Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #062056 50%, #0a0a0a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #38bdf8, transparent)",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 20px",
          borderRadius: 50,
          border: "1px solid rgba(56,189,248,0.3)",
          background: "rgba(56,189,248,0.08)",
          marginBottom: 24,
        }}
      >
        <span
          style={{
            color: "#38bdf8",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 3,
          }}
        >
          WEB DEVELOPER
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 72, fontWeight: 800, color: "#ffffff" }}>
          Jason
        </span>
        <span style={{ fontSize: 72, fontWeight: 800, color: "#38bdf8" }}>
          Sta. Rita
        </span>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.6)",
          marginTop: 16,
          maxWidth: 600,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Crafting modern, performant web experiences with Next.js & React
      </p>

      {/* Tech pills */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 32,
        }}
      >
        {["Next.js", "React", "Laravel", "Supabase", "TypeScript"].map(
          (tech) => (
            <div
              key={tech}
              style={{
                padding: "6px 16px",
                borderRadius: 50,
                border: "1px solid rgba(56,189,248,0.2)",
                background: "rgba(56,189,248,0.06)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ),
        )}
      </div>

      {/* Bottom URL */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#38bdf8",
            boxShadow: "0 0 10px rgba(56,189,248,0.6)",
          }}
        />
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
          jasonportfolio.vercel.app
        </span>
      </div>
    </div>,
    { ...size },
  );
}
