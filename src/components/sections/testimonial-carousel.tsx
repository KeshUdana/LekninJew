"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="min-w-0 flex-[0_0_100%] p-1">
            <div className="luxury-card p-8 text-center">
              <p className="text-lg leading-relaxed text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <cite className="mt-4 block text-sm uppercase tracking-[0.2em] text-primary not-italic">
                {item.name}
              </cite>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
