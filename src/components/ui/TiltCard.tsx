import { useRef, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const xSpring = useSpring(mx, { stiffness: 220, damping: 22 });
  const ySpring = useSpring(my, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(ySpring, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(xSpring, [0, 1], [-intensity, intensity]);

  const glareX = useTransform(xSpring, [0, 1], [0, 100]);
  const glareY = useTransform(ySpring, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, oklch(1 0 0 / 0.08) 0%, transparent 55%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
        }}
        className={className}
      >
        {children}
        {/* Glare overlay */}
        <motion.div
          style={{
            background: glare,
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </motion.div>
    </div>
  );
}
