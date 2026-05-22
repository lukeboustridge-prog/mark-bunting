import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mark Bunting Human Communications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FFFBF5 0%, #FFF7ED 55%, #FED7AA 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Flame glow */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#EA580C",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #F97316, #DC2626)",
              display: "flex",
            }}
          />
          Mark Bunting
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              color: "#1F2937",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            I teach people to
            <br />
            get on with
            <span style={{ color: "#EA580C", marginLeft: 18 }}>
              each other.
            </span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#374151",
              fontWeight: 500,
              maxWidth: "900px",
              display: "flex",
            }}
          >
            Communication training, keynote speaking & coaching · NZ
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#1F2937",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>markbunting.co.nz</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#EA580C",
            }}
          >
            Human Communications
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
