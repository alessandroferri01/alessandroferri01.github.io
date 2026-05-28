import { profile } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>About me</SectionLabel>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.1}>
            <div className={styles.textCol}>
              <h2 className={styles.heading}>
                Building products that <em>matter</em>
              </h2>
              <p className={styles.bio}>{profile.bio}</p>
              <p className={styles.bio}>
                Based in <strong>{profile.location}</strong>, I combine deep
                technical expertise with a sharp eye for UX — delivering
                solutions that are both powerful and intuitive.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left">
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <InfoRow icon="📍" label="Location" value={profile.location} />
                <InfoRow
                  icon="✉️"
                  label="Email"
                  value={
                    <a href={`mailto:${profile.email}`} className={styles.link}>
                      {profile.email}
                    </a>
                  }
                />
                <InfoRow icon="📱" label="Phone" value={profile.phone} />
              </div>

              <div className={styles.socials}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoIcon}>{icon}</span>
      <div>
        <div className={styles.infoLabel}>{label}</div>
        <div className={styles.infoValue}>{value}</div>
      </div>
    </div>
  );
}
