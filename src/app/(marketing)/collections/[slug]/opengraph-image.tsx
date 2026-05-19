import { ImageResponse } from "next/og";
import { products } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProductOgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductOgImage({ params }: ProductOgImageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug) ?? products[0];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#111111",
          color: "#F0EAD6",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#C9A055" }}>
          LEKNIN JEWELS
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
          {product.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 28 }}>
          From ${product.priceFromUsd.toLocaleString()} USD
        </div>
      </div>
    ),
    size,
  );
}
