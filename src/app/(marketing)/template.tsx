import type { PropsWithChildren } from "react";
import { PageFade } from "@/components/motion/page-fade";

export default function MarketingTemplate({ children }: PropsWithChildren) {
  return <PageFade>{children}</PageFade>;
}
