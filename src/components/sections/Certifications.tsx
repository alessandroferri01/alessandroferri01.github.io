import { certifications, education } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./Certifications.module.css";

export function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>Certifications & Education</SectionLabel>
          <h2 className={styles.heading}>
            Continuous <em>learning</em>
          </h2>
          <p className={styles.sub}>
            Formal education enriched by industry certifications and hands-on courses.
          </p>
        </ScrollReveal>

        <div className={styles.eduCard}>
          <ScrollReveal delay={0.05}>
            <div className={styles.eduInner}>
              <span className={styles.eduBadge}>Education</span>
              <div className={styles.eduContent}>
                <div>
                  <h3 className={styles.eduDegree}>{education.degree}</h3>
                  <span className={styles.eduSchool}>{education.school}</span>
                </div>
                <div className={styles.eduMeta}>
                  <span className={styles.grade}>{education.grade}</span>
                  <span className={styles.year}>{education.year}</span>
                </div>
              </div>
              <p className={styles.eduDesc}>{education.description}</p>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  {cert.grade && (
                    <span className={styles.grade}>{cert.grade}</span>
                  )}
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <div className={styles.tags}>
                  {cert.topics.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className={styles.certYear}>{cert.year}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
