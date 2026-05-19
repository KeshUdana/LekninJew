"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { heroSlides } from "@/lib/data";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const timer = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.title} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[80vh] min-h-[560px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="container-shell relative z-10 flex h-full flex-col justify-end pb-24 text-secondary">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">
                    Leknin Jewels
                  </p>
                  <h1 className="mt-4 max-w-4xl text-4xl leading-tight sm:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base text-secondary/90 sm:text-lg">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
