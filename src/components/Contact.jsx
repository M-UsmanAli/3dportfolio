import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setFrom] = useState({ name: "", email: "", message: "" });
  const fromRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_uzogqrf",
        "template_bxe43a9",
        {
          //  template ID  // email service id
          from_name: form.name,
          to_name: "Muhammad Usman Ali",
          from: form.email,
          to_email: "aliusmanmuhammad98@gmail.com",
          message: form.message,
        },
        "22P1u6vFjLpkkd7CM" // public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You! I will get back to you as soon as possible");

          setFrom({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] px-10">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 mr-[50px]"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What`s your name?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What`s your email?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit
          text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
