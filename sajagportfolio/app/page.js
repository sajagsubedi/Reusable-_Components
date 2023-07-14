import styles from "@/styles/Home.module.css";
import {
  HeroSection,
  Services,
  Skills,
  Projects,
  Contact,
  About,
} from "@/Components/index.js";

function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
export default Home;
