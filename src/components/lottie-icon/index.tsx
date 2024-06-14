"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { LottieIconProps } from "@/types";

export function LottieIcon({ jsonPath, className }: LottieIconProps) {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: jsonPath,
      });
    }

    return () => lottie.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonPath]);
  return <div ref={animationContainer} className={className} />;
}
