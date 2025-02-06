import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData();
      formData.append("email", document.getElementById("email").value);
      formData.append("tel", document.getElementById("tel").value);
      formData.append("username", document.getElementById("username").value);
      formData.append("message", document.getElementById("message").value);

      // Submit form
      const response = await axios.post(
        `https://formsubmit.co/jaloliddinzokirov.dev@gmail.com`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Successfully sent");
    } catch (error) {
      toast.error("An error occurred, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={`${themeMode ? styles.light : styles.contact}`}>
        <form className={styles.box} onSubmit={handleSubmit}>
          <h2 className={styles.title}>
            Ask me a <span>question</span>
          </h2>
          <div className={styles.inpBox}>
            <div className={styles.left}>
              <input id="email" type="email" placeholder="Enter Email" />
              <input id="tel" type="tel" placeholder="Enter Telephone number" />
              <input
                id="username"
                type="text"
                placeholder="Enter Telegram Username"
              />
            </div>
            <textarea
              id="message"
              className={styles.right}
              placeholder="Enter Question"
            ></textarea>
          </div>
          <button className={styles.btn} disabled={isSubmitting}>
            {isSubmitting ? "Submitting...." : "Submit"}
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
