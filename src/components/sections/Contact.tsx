import { useState } from "react";
import { profile } from "../../data/resume";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./Contact.module.css";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className={styles.heading}>
            Let's work <em>together</em>
          </h2>
          <p className={styles.sub}>
            Open to new opportunities, collaborations, or just a chat about
            building great software.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={styles.card}>
            <div className={styles.emailRow}>
              <span className={styles.emailLabel}>Primary contact</span>
              <span className={styles.email}>{profile.email}</span>
              <button className={styles.copyBtn} onClick={copyEmail}>
                {copied ? "✓ Copied!" : "Copy email"}
              </button>
            </div>

            <div className={styles.divider} />

            <div className={styles.links}>
              <a
                href={`mailto:${profile.email}`}
                className={styles.linkBtn}
              >
                <span className={styles.linkIcon}>✉️</span>
                Send email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <span className={styles.linkIcon}>💼</span>
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <span className={styles.linkIcon}>🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </section>
  );
}
