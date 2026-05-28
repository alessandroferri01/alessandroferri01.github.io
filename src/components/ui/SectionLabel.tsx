import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className={styles.label}>
      <span className={styles.line} />
      <span className={styles.text}>{children}</span>
      <span className={styles.line} />
    </div>
  );
}
