import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./FloatingShapes.module.css";

interface FloatingShapesProps {
  containerRef: RefObject<HTMLElement | null>;
}

export function FloatingShapes({ containerRef }: FloatingShapesProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -290]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -65]);

  return (
    <div className={styles.container} aria-hidden="true">
      {/* Rings */}
      <motion.div
        className={`${styles.ring} ${styles.ring1}`}
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className={`${styles.ring} ${styles.ring2}`}
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className={`${styles.ring} ${styles.ring3}`}
        style={{ y: y3 }}
      />

      {/* Cubo grande */}
      <motion.div className={styles.cubeWrap} style={{ y: y1 }}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.fFront}`} />
          <div className={`${styles.face} ${styles.fBack}`} />
          <div className={`${styles.face} ${styles.fLeft}`} />
          <div className={`${styles.face} ${styles.fRight}`} />
          <div className={`${styles.face} ${styles.fTop}`} />
          <div className={`${styles.face} ${styles.fBottom}`} />
        </div>
      </motion.div>

      {/* Cubo piccolo */}
      <motion.div className={styles.cube2Wrap} style={{ y: y4 }}>
        <div className={styles.cube2}>
          <div className={`${styles.face2} ${styles.f2Front}`} />
          <div className={`${styles.face2} ${styles.f2Back}`} />
          <div className={`${styles.face2} ${styles.f2Left}`} />
          <div className={`${styles.face2} ${styles.f2Right}`} />
          <div className={`${styles.face2} ${styles.f2Top}`} />
          <div className={`${styles.face2} ${styles.f2Bottom}`} />
        </div>
      </motion.div>

      {/* Orb glow */}
      <motion.div className={`${styles.orb} ${styles.orb1}`} style={{ y: y2 }} />
      <motion.div className={`${styles.orb} ${styles.orb2}`} style={{ y: y4 }} />
    </div>
  );
}
