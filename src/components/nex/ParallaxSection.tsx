import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  image: string;
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  overlayClassName?: string;
};

export function ParallaxSection({
  image,
  children,
  className = "",
  intensity = 0.15,
  overlayClassName = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${intensity * 100}%`, `${intensity * 100}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute -top-[15%] left-0 h-[130%] w-full object-cover"
        style={{ y, willChange: "transform" }}
      />
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
