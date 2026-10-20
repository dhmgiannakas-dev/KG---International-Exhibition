
import { useEffect, useRef, useState } from "react";

/* =========================================
   ANIMATED COUNTER COMPONENT
   Animates from 0 to the target number
========================================= */

export default function AnimatedCounter({
  value,
  duration = 1800,
  suffix = "",
  prefix = "",
  format = true,
}) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    let animationFrame;
    let observer;

    const startAnimation = () => {
      if (hasAnimated.current) return;

      hasAnimated.current = true;

      // Respect reduced-motion preferences
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }

      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        // Ease-out: fast at first, slower near the end
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(value * easedProgress);

        setCount(currentValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <span ref={counterRef}>
      {prefix}
      {format
        ? count.toLocaleString("de-DE")
        : count}
      {suffix}
    </span>
  );
}
