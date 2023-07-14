import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);
  return (
    <section id="about" className={styles.about}>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="SectionDivider"
      ></div>
      <h2 data-aos="fade-up" data-aos-duration="2000" className="SectionTitle">
        About Me
      </h2>
      <h3
        data-aos="fade-up"
        data-aos-duration="2000"
        className="SectionSubHeading"
      >
        Get to know Me!
      </h3>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className={styles.aboutBody}
      >
        <p className={styles.aboutText}>
          Hey there, I'm Sajag Subedi, a web developer based in Pokhara. With
          a year of experience under my belt, I've embarked on an exciting coding
          journey, honing my expertise in the MERN stack. With a strong
          foundation in HTML, CSS, and JavaScript, I quickly progressed to
          mastering Node.js and React.js. Continuously learning and staying
          up-to-date with the latest technologies, I create innovative web
          experiences by turning ideas into reality. 
          <br /><br />&nbsp;&nbsp; In this fast-paced web
          development world, I constantly refine my skills through YouTube and
          other free resources. With a focus on continuous growth, I stay ahead
          of the curve to provide modern web solutions. My journey began with an
          intense four-month dive into HTML, CSS, and JavaScript, and I have
          since developed expertise in the MERN stack. Transforming concepts
          into functional websites, I'm driven by the satisfaction of bringing
          visions to life through code. Whether you're an individual or a
          business seeking exceptional web development, let's connect and create
          remarkable online experiences together.
        </p>
      </div>
    </section>
  );
};

export default About;
