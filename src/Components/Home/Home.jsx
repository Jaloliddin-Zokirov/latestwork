import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "../About/About";
import Work from "../Work/Work";
import Experience from "../Experience/Experience";

const Home = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <>
      <About />
      <Experience />
      <Work />
      <section
        className={`${themeMode ? styles.contactLight : styles.contact}`}
      >
        <div className="container">
          <div className={styles.contactBox}>
            <h2 className={styles.contactTitle}>
              Ready to start your next project?
              <Link to={"contact"}>Get it touch me!</Link>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
