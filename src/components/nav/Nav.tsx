import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Coursera", href: "#coursera" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span>A</span>lessandro Ferri
          </div>

          <ul className={styles.links}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <button
                  className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ""}`}
                  onClick={() => scrollTo(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button className={styles.cta} onClick={() => scrollTo("#contact")}>
            Hire me
          </button>

          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`${styles.menuBtnBar} ${menuOpen ? styles.open : ""}`} />
            ))}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${styles.open}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.button
                key={label}
                className={styles.mobileLink}
                onClick={() => scrollTo(href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
