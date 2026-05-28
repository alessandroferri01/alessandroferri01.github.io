import { motion } from "framer-motion";
import { courseraCertifications } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./CourseraCertifications.module.css";

export function CourseraCertifications() {
  return (
    <section id="coursera" className={styles.section}>
      {/* animated grid background */}
      <div className={styles.gridBg} aria-hidden="true" />

      {/* meta glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        <ScrollReveal>
          <SectionLabel>Coursera × Meta</SectionLabel>
          <h2 className={styles.heading}>
            Certified by <em>Meta</em>
          </h2>
          <p className={styles.sub}>
            Official professional certificates issued by Meta through Coursera's
            industry-recognized program.
          </p>
        </ScrollReveal>

        {/* Meta banner */}
        <ScrollReveal delay={0.1}>
          <div className={styles.metaBanner}>
            <div className={styles.metaLogoWrap}>
              <span className={styles.metaInfinity}>∞</span>
              <span className={styles.metaWordmark}>Meta</span>
            </div>
            <div className={styles.metaBannerText}>
              <span className={styles.metaBannerTitle}>Meta Professional Certificate Program</span>
              <span className={styles.metaBannerSub}>
                Industry-grade curriculum designed and taught by Meta engineers
              </span>
            </div>
            <div className={styles.metaBannerBadge}>
              <span className={styles.metaBadgeDot} />
              Verified
            </div>
          </div>
        </ScrollReveal>

        {/* cards grid */}
        <div className={styles.grid}>
          {courseraCertifications.map((cert, i) => (
            <ScrollReveal key={cert.credential} delay={0.1 + i * 0.12} className={styles.revealWrapper}>
              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* scan-line sweep */}
                <span className={styles.scanLine} aria-hidden="true" />

                {/* glowing corner */}
                <span className={styles.cornerGlow} aria-hidden="true" />

                <div className={styles.cardHeader}>
                  <span className={styles.metaChip}>
                    <span className={styles.metaChipInfinity}>∞</span>
                    Meta
                  </span>
                  <span className={styles.courseraChip}>Coursera</span>
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>

                <div className={styles.tags}>
                  {cert.topics.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.credentialId}>
                    <span className={styles.credentialLabel}>ID</span>
                    {cert.credential}
                  </span>
                  <span className={styles.verifyLink}>
                    Verify ↗
                  </span>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
