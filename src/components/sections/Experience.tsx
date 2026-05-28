import { experiences } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className={styles.heading}>
            Where I've <em>worked</em>
          </h2>
          <p className={styles.sub}>
            A track record of delivering high-impact software across diverse industries.
          </p>
        </ScrollReveal>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={styles.item}>
                <div className={styles.itemLeft}>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <div className={styles.itemDot}>
                  <div className={styles.dot} />
                  {i < experiences.length - 1 && <div className={styles.line} />}
                </div>

                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.company}>{exp.company}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.techList}>
                    {exp.tech.map((t) => (
                      <span key={t} className={styles.tech}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
