import styles from "@/styles/Home.module.css";
import { skills } from "../Constants/Skills.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="skills" className={styles.Skills}>
      <div className="SectionDivider"></div>
      <h2  data-aos="fade-up"
        data-aos-duration="2000"
        className="SectionTitle">My Skills</h2>
      <h3  data-aos="fade-up"
        data-aos-duration="2000"
        className="SectionSubHeading">What Can I Do Well?</h3>
      <div className={styles.skillsGroup}>
        {skills.map((skill, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={i}
              className={styles.skillbar}
            >
              <div className={styles.progressbar}>
                <span
                  className={styles.progress}
                  style={{ width: skill.percent }}
                >
                  <span>{skill.title}</span>
                </span>
              </div>
              <span className={styles.progresspercent}>{skill.percent}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
