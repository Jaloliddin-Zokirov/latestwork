import React, { useState } from "react";
import styles from "./Experience.module.scss";
import { useSelector } from "react-redux";

const Experience = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const [select, setSelect] = useState("first");

  const experiences = [
    {
      id: "first",
      position: "UI Engineer",
      company: "@Google",
      period: "2022 - Present",
      responsibilities: [
        "Design and implementation of visually appealing and intuitive user interfaces for innovative technology products.",
        "Continuous improvement of the user experience and maintenance of quality standards.",
        "Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product.",
      ],
    },
    {
      id: "second",
      position: "Frontend Developer",
      company: "@Hashnode",
      period: "2020 - 2022",
      responsibilities: [
        "Developed and maintained the core web platform, ensuring a seamless and engaging experience for technical bloggers and readers.",
        "Collaborated with the design team to create interactive and responsive UI components.",
        "Optimized performance and accessibility to improve user engagement across various devices.",
      ],
    },
    {
      id: "third",
      position: "Software Engineer",
      company: "@Oculus",
      period: "2018 - 2020",
      responsibilities: [
        "Engineered immersive VR interfaces and interactive components for a next-generation virtual reality platform.",
        "Worked closely with 3D artists and UX designers to create intuitive and futuristic user experiences.",
        "Implemented performance optimizations to ensure smooth and responsive VR interactions.",
      ],
    },
  ];

  const selectedExperience = experiences.find((exp) => exp.id === select);

  return (
    <section
      className={`${themeMode ? styles.experienceLight : styles.experience}`}
      id="about"
    >
      <div className="container">
        <h2 className={styles.title}>My experience</h2>
        <div className={styles.box}>
          <ul className={styles.left}>
            {experiences.map((exp) => (
              <li
                key={exp.id}
                className={`${styles.item} ${
                  select === exp.id ? styles.active : ""
                }`}
                onClick={() => setSelect(exp.id)}
              >
                <img
                  src={`${
                    themeMode
                      ? "l" + exp.company.toLowerCase().replace("@", "")
                      : exp.company.toLowerCase().replace("@", "")
                  }.svg`}
                  width={36}
                  height={36}
                  alt={`${exp.company} icon`}
                />
                <div>
                  <h3>{exp.company.replace("@", "")}</h3>
                  <p>{exp.position}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.right}>
            <div className={styles.titleBox}>
              <h4>
                {selectedExperience.position} at{" "}
                <span>{selectedExperience.company}</span>
              </h4>
              <p>{selectedExperience.period}</p>
            </div>
            <ul>
              {selectedExperience.responsibilities.map((task, index) => (
                <li key={index}>
                  <p>
                    <span>{">"}</span> {task}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
