"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";

type NavbarProps = {
  onNavClick?: (target: string) => void;
};

const navItems = [
  { label: "About me", target: "#about" },
  { label: "Works", target: "#works" },
  { label: "Skills", target: "#skills" },
  { label: "Contact", target: "#contact" },
];

export default function Navbar({ onNavClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, target: string) => {
    if (onNavClick) {
      e.preventDefault();
      onNavClick(target);
    }
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Desktop menu */}
        <div className={styles.menu}>
          {navItems.map((item) => (
            <Link
              key={item.target}
              href={item.target}
              className={styles.menuItem}
              onClick={(e) => handleClick(e, item.target)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.target}
              href={item.target}
              className={styles.mobileMenuItem}
              onClick={(e) => handleClick(e, item.target)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
