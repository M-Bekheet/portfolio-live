import { ImageResponse } from "next/og";

import { SITE } from "./utils/constants/site";

export const alt = `${SITE.name} — ${SITE.role}`;
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
          background: "#f5f3ee",
          color: "#171a1f",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "58px",
                height: "58px",
                border: "2px solid #171a1f",
                borderRadius: "6px",
                fontSize: "22px",
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              {SITE.monogram}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 600 }}>
                {SITE.name}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#616770",
                  fontFamily: "monospace",
                }}
              >
                {SITE.location}
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#2a4b9b",
              fontFamily: "monospace",
            }}
          >
            Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ width: "92px", height: "4px", background: "#2a4b9b" }} />
          <span
            style={{
              fontSize: "74px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            Senior Front-end Developer
          </span>
          <span style={{ fontSize: "30px", color: "#3b4149" }}>
            React · Next.js · TypeScript
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #dcd7cb",
            paddingTop: "22px",
            fontSize: "20px",
            color: "#616770",
          }}
        >
          <span>6 years of professional experience</span>
          <span>Open to remote or onsite roles</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
