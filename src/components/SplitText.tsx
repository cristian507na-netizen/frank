"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  startDelay?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 60,
  duration = 0.9,
  startDelay = 0
}: SplitTextProps) {
  const words = text.split(" ");

  let globalIndex = 0;
  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0"
        >
          <span className="inline-block">
            {Array.from(word).map((ch) => {
              const i = globalIndex++;
              return (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration,
                    ease: [0.5, 0, 0, 1],
                    delay: startDelay + (i * delay) / 1000
                  }}
                  className="inline-block will-change-transform"
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}
    </h1>
  );
}
