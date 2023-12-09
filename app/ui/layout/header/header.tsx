"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = ({ siteTitle = "", className = "" }) => {
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const pathName = usePathname();
  // const [navOpen, setNavOpen] = useState(false);

  // useEffect(() => {
  //   const trackActiveItem = () => {
  //     const work = document.querySelector("#work"),
  //       testimonials = document.querySelector("#testimonials"),
  //       scrollPosition =
  //         document.documentElement.scrollTop + 40 ||
  //         document.body.scrollTop + 40,
  //       nav = document.querySelector(`.${styles.nav}`);

  //     if (scrollPosition < work.offsetTop) {
  //       if (document.querySelector(".active-nav-link")) {
  //         document
  //           .querySelector(".active-nav-link")
  //           .classList.remove("active-nav-link");
  //         nav.querySelector('a[href=""').classList.add("active-nav-link");
  //       }
  //     } else if (scrollPosition < testimonials.offsetTop) {
  //       document
  //         .querySelector(".active-nav-link")
  //         .classList.remove("active-nav-link");
  //       nav.querySelector('a[href="#work"').classList.add("active-nav-link");
  //     } else {
  //       document
  //         .querySelector(".active-nav-link")
  //         .classList.remove("active-nav-link");
  //       nav
  //         .querySelector('a[href="#testimonials"')
  //         .classList.add("active-nav-link");
  //     }
  //   };

  //   if (
  //     !window.location.href.includes("blog") &&
  //     !window.location.href.includes("contact")
  //   ) {
  //     window.addEventListener("scroll", trackActiveItem);
  //   } else {
  //     window.removeEventListener("scroll", trackActiveItem);
  //   }
  //   return () => window.removeEventListener("scroll", trackActiveItem);
  // }, []);

  // const handleNavClick = () => {
  //   setNavOpen(!navOpen);
  // };

  const imgSrc =
    "https://images.pexels.com/photos/18276320/pexels-photo-18276320/free-photo-of-interior-of-a-traditional-moorish-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <header className={styles.header + " " + className}>
      <a
        href="# "
        className={styles.toggleNav}
        // onClick={handleNavClick}
        rel="noopener noreferrer"
      >
        <span>☰</span> Menu
      </a>

      <nav
        // ${navOpen ? "open" : ""}`
        className={`${styles.nav}`}
      >
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={"/images/avatar.png"}
            width={120}
            height={120}
            alt="Developer"
          />
        </div>
        <li className={styles.navItem}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/#work">Work</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
