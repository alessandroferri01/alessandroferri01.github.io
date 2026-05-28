import { skills } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { TiltCard } from "../ui/TiltCard";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className={styles.heading}>
            Technologies I <em>work with</em>
          </h2>
          <p className={styles.sub}>
            A curated stack refined across years of real-world projects.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.07} className={styles.revealWrapper}>
              <TiltCard className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.dot} />
                  <span className={styles.category}>{group.category}</span>
                </div>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
