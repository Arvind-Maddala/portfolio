import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

const WorkExperience = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={container}
      className="work__experience"
    >
      {" "}
      <motion.li className="work__experience--item" variants={item}>
        <div className="work__experience--logoDiv">
          <img
            className="work__experience--logo"
            src="images/collectives.png"
            alt="Data Chain logo"
          />
        </div>
        <div className="work__experience--details">
          <h5 className="work__experience--duration">Nov 2022 - Present</h5>
          <h2 className="work__experience--Title">Frontend Developer</h2>
        </div>
      </motion.li>{" "}
      <motion.li className="work__experience--item" variants={item}>
        <div className="work__experience--logoDiv">
          <img
            className="work__experience--logo"
            src="images/josh.svg"
            alt="Data Chain logo"
          />
        </div>
        <div className="work__experience--details">
          <h5 className="work__experience--duration">
            April 2022 - October 2022
          </h5>
          <h2 className="work__experience--Title">Software Engineer</h2>
        </div>
      </motion.li>
      <motion.li className="work__experience--item" variants={item}>
        <div className="work__experience--logoDiv">
          <img
            className="work__experience--logo"
            src="images/datachai11.png"
            alt="Data Chain logo"
          />
        </div>
        <div className="work__experience--details">
          <h5 className="work__experience--duration">
            November2021 - April 2022
          </h5>
          <h2 className="work__experience--Title">Software Engineer</h2>
        </div>
      </motion.li>
      <motion.li className="work__experience--item" variants={item}>
        <div className="work__experience--logoDiv">
          <img
            className="work__experience--logo"
            src="images/Mascorp.png"
            alt="Mascorp logo"
          />
        </div>
        <div className="work__experience--details">
          <h5 className="work__experience--duration">
            September 2020 - October 2021
          </h5>
          <h2 className="work__experience--Title">Software Engineer</h2>
        </div>
      </motion.li>
    </motion.ul>
  );
};

export default WorkExperience;
