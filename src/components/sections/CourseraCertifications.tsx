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
          <SectionLabel>Coursera Partner Programs</SectionLabel>
          <h2 className={styles.heading}>
            Certified by <em>Meta & Google</em>
          </h2>
          <p className={styles.sub}>
            Official professional certificates issued by Meta and Google through Coursera's
            industry-recognized programs.
          </p>
        </ScrollReveal>

        {/* Partners banner */}
        <ScrollReveal delay={0.1}>
          <div className={styles.partnerBanner}>
            <div className={styles.partnerLogos}>
              <div className={styles.partnerItem}>
                <span className={styles.metaInfinity}>∞</span>
                <span className={styles.metaWordmark}>Meta</span>
              </div>
              <span className={styles.partnerDivider}>&</span>
              <div className={styles.partnerItem}>
                <svg className={styles.googleIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span className={styles.googleWordmark}>Google</span>
              </div>
            </div>
            <div className={styles.partnerBannerText}>
              <span className={styles.partnerBannerTitle}>Industry Professional Certificate Programs</span>
              <span className={styles.partnerBannerSub}>
                Industry-grade curriculum designed and taught by Meta engineers and Google AI specialists
              </span>
            </div>
            <div className={styles.partnerBannerBadge}>
              <span className={styles.metaBadgeDot} />
              Verified Partners
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
                className={`${styles.card} ${cert.issuer === "Google" ? styles.cardGoogle : styles.cardMeta}`}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* scan-line sweep */}
                <span className={styles.scanLine} aria-hidden="true" />

                {/* glowing corner */}
                <span className={styles.cornerGlow} aria-hidden="true" />

                <div className={styles.cardHeader}>
                  {cert.issuer === "Meta" ? (
                    <span className={styles.metaChip}>
                      <span className={styles.metaChipInfinity}>∞</span>
                      Meta
                    </span>
                  ) : cert.issuer === "Google" ? (
                    <span className={styles.googleChip}>
                      <svg className={styles.googleChipIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                      Google
                    </span>
                  ) : (
                    <span className={styles.defaultChip}>{cert.issuer}</span>
                  )}
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
