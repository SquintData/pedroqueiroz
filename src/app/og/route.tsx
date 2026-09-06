import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const runtime = "edge";
const imageSize = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #11100f 0%, #1b1a18 62%, #2b2216 100%)",
          color: "#f4ede1",
          padding: 72,
          fontFamily: "Georgia"
        }}
      >
        <div style={{ color: "#d99a3d", fontSize: 28, letterSpacing: 8 }}>
          VIDEO MAKER MOBILE
        </div>
        <div>
          <div style={{ fontSize: 118, fontWeight: 700, lineHeight: 0.9 }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 30, fontSize: 44, color: "#d8cab6" }}>
            Araguaina - TO | Reels | Empresas | Eventos
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#11100f", fontSize: 30, fontWeight: 700 }}>
          <span style={{ background: "#d99a3d", padding: "18px 28px" }}>
            WhatsApp: +55 63 99243-5592
          </span>
        </div>
      </div>
    ),
    imageSize
  );
}
