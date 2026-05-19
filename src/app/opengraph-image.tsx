import { ImageResponse } from "next/og";

export const alt = "Leknin Jewels";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#111111",
          color: "#F0EAD6",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#C9A055" }}>
          LEKNIN JEWELS
        </div>
        <div style={{ fontSize: 56, marginTop: 20 }}>Sri Lankan Artisan Jewelry</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
