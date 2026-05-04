import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className = "",
  style = {}
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    damping: 30,
    stiffness: 50,
  });

  const display = useTransform(spring, (latest) => {
    return Math.floor(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </motion.div>
  );
}
