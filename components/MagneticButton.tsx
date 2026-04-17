"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  /** Max pixel offset the button moves toward the cursor. Default 10. */
  strength?: number;
};

/**
 * A button/link that gently pulls toward the cursor when hovered.
 * Uses spring-damped motion values so it feels alive but not jittery.
 */
export function MagneticButton({
  href,
  onClick,
  className,
  children,
  strength = 10,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 260, damping: 20, mass: 0.3 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // normalized -1..1 distance from center, then multiplied by strength
    const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
    const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;
    x.set(dx);
    y.set(dy);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const commonProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { x: sx, y: sy },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} {...(commonProps as any)}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...(commonProps as any)}>
      {children}
    </motion.button>
  );
}
