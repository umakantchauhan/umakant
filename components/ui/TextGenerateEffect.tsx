"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();

  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
        ease: "easeOut",
      },
    );
  }, [animate, filter, duration]);

  return (
    <div
      ref={scope}
      className={cn("my-4 font-bold leading-snug tracking-wide", className)}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className={cn(
            "inline-block opacity-0",
            idx > 3 ? "text-purple" : "text-white",
          )}
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};
