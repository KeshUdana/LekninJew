"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(images[0]);
  const [lightbox, setLightbox] = useState(false);

  return (
    <section>
      <button
        onClick={() => setLightbox(true)}
        className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-border/70"
      >
        <Image src={active} alt={name} fill className="object-cover" />
      </button>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActive(image)}
            className={`relative h-28 overflow-hidden rounded-2xl border ${
              active === image ? "border-primary" : "border-border/70"
            }`}
          >
            <Image src={image} alt={name} fill className="object-cover" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-black/90 p-4">
          <div className="container-shell h-full">
            <button
              className="mb-4 inline-flex rounded-full border border-white/20 p-2 text-secondary"
              onClick={() => setLightbox(false)}
            >
              <X size={18} />
            </button>
            <div className="relative h-[80vh] overflow-hidden rounded-3xl">
              <Image src={active} alt={name} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
