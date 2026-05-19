"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useRef } from "react";

type ParallaxBannerProps = PropsWithChildren<{
  imageUrl: string;
  className?: string;
}>;

export function ParallaxBanner({
  imageUrl,
  className,
  children,
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border border-border/60 ${className ?? ""}`}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ y, backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 p-8 text-secondary sm:p-12">{children}</div>
    </section>
  );
}
