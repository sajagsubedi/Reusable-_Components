import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    let anchorTags = document.querySelectorAll(".menu li a");
    const navigation = document.getElementById("navigation");
    const menuToggle = document.getElementById("menuToggle");
    const offFunc = () => {
      navigation.classList.remove(styles.active);
    };
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
    menuToggle.addEventListener("click", () => {
      console.log("clicked");
      navigation.classList.toggle(styles.active);
    });
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div id="navigation" className={styles.navigation}>
          <div className={styles.phoneVisible}>
            <div className={styles.appnameBx}>
              <h3 className={styles.appname}>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM37 40H11q-1.25 0-2.125-.875T8 37v-1.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V37q0 1.25-.875 2.125T37 40Zm-26-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"
                  />
                </svg>
               <span>Port</span>folio
              </h3>
            </div>
            <div id="menuToggle" className={styles.menuToggle}>
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M24 40q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7T24 40Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7T24 8q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Z"
                />
              </svg>
            </div>
          </div>
          <div className={styles.navlinks}>
            <ul className={styles.menu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About Me</Link>
              </li>
              <li>
                <Link href="/#services">My Services</Link>
              </li>
              <li>
                <Link href="/#Projects">My Projects</Link>
              </li>
              <li>
                <Link href="#skills">My Skills</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
