import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const typed = new Typed(el.current, {
        strings: ["-A Web Developer ", "-A Web Designer "],
        typeSpeed: 50,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="Hero" className={styles.HeroSection}>
      <div className={styles.heroDescriptionHalf}>
        <h2 className={styles.heroText}>Hello Everyone,I am</h2>
        <h1 className={styles.HeroMainText}>
          <span className="focusText">Sajag Subedi</span>
          <span
            ref={el}
            className={`supportingText ${styles.supportingText}`}
          ></span>
        </h1>

        <div className="btn-container">
          <button className="PrimaryButton btn">Hire Me</button>
          <button className="SecondaryButton btn">
            <Link href={"/#about"}>About Me</Link>
          </button>
        </div>
      </div>
      <div className={styles.heroImageHalf}>
        <div className={styles.heroImgBx}>
          <Image
            className={styles.heroImg}
            src={"/home.png"}
            alt="Sajag"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className={styles.heroImageTextBx}>
          <div className={styles.hrLine}></div>
          <div className={styles.hrLine}></div>
          <h3 className={styles.heroImageText}>A Innovative Web Developer</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
