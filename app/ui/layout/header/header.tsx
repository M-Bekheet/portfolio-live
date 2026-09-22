"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { NAV, SITE } from "@/app/utils/constants/site";
import { ResumeAction } from "@/app/ui/actions/resume-action";
import styles from "./header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    if (open) {
      setOpen(false);
      return;
    }

    // A keyboard activation reports detail 0. Move focus into the opened menu
    // so the links are reachable immediately; pointer users keep their focus.
    const keyboardActivated = event.detail === 0;
    setOpen(true);

    if (keyboardActivated) {
      window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} — home`}>
          <span className={styles.monogram} aria-hidden="true">
            {SITE.monogram}
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{SITE.name}</span>
            <span className={styles.brandRole}>{SITE.role}</span>
          </span>
        </Link>

        <nav
          id="site-menu"
          className={styles.nav}
          data-open={open}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {NAV.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={styles.navLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navAction}>
            <ResumeAction variant="primary" />
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopResume}>
            <ResumeAction variant="secondary" />
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={toggleMenu}
          >
            <span className="visually-hidden">
              {open ? "Close menu" : "Open menu"}
            </span>
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
