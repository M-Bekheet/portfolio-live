"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";

const Header = ({ className = "" }) => {
  const [navOpen, setNavOpen] = useState(false);
  const closeMenu = () => setNavOpen(false);
  return (
    <header className={styles.header + " " + className}>
      <a
        href="# "
        className={styles.toggleNav}
        onClick={() => setNavOpen((prev) => !prev)}
        rel="noopener noreferrer"
      >
        <span>☰</span> Menu
      </a>

      <nav className={`${styles.nav} ${navOpen && "open"}`}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={"/images/avatar.png"}
            fill
            alt="Developer"
            priority
          />
        </div>
        <ul>
          <li className={styles.navItem}>
            <Link onClick={closeMenu} href="/#about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link onClick={closeMenu} href="/#work">
              Work
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link onClick={closeMenu} href="/#testimonials">
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link onClick={closeMenu} href="/blog">
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link onClick={closeMenu} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
