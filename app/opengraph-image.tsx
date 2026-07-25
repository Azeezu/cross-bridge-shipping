import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Cross Bridge Shipping L.L.C. — Reliable Shipping & Logistics Solutions Worldwide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #14294a 55%, #0b1f3a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#f97316", display: "flex" }} />
          <div
            style={{
              fontSize: 26,
              color: "#fdba74",
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {SITE_CONFIG.name}
          </div>
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 62,
            color: "#ffffff",
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 940,
            display: "flex",
          }}
        >
          Reliable Shipping &amp; Logistics Solutions Worldwide
        </div>
        <div style={{ marginTop: 26, fontSize: 26, color: "#c7d2e0", maxWidth: 820, display: "flex" }}>
          {SITE_CONFIG.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
