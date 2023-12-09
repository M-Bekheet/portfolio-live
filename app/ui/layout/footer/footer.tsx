import React from "react";

import styles from "./footer.module.scss";

const Footer = ({ title = "Mahmoud Bekheet", className = "" }) => {
  return (
    <footer className={styles.footer + " " + className}>
      <span>
        © {new Date().getFullYear()}, Developed by
        {` `}
        <a href="https://www.twitter.com/7odaGeek">{title}</a>
        &nbsp;Design by&nbsp;
        <a href="https://twitter.com/realvjy">Vijay Verma</a>
      </span>
    </footer>
  );
};

export default Footer;
