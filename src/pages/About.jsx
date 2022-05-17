import React, { useEffect, useState } from "react";
import "./About.modules.css";
import axios from "axios";
const words = ["Hello", "I am Ravi and I am a WebDeveloper Welcome to my page"];

export const About = (props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearTimeout(timeout2);
  }, [blink]);

  let [right, setRight] = useState(0);
  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);
  let [bottom, setBottom] = useState(0);
  let [change, setChange] = useState(true);
  let [w, h] = [window.innerWidth, window.innerHeight];
  
  const runChange = () => {
    console.log("clicked");

    setChange((prev) => !prev);
  };

  return (
    <div className="about" id="about">
      <div className="me">
        <div>
          <h1 className="greenhighligh">
            {index === 0
              ? `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`
              : ""}
          </h1>
          <h1 className="intro-text">
            {index === 1
              ? `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`
              : ""}
          </h1>
        </div>
        <div className="social-iconss">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i class="fas fa-envelope"></i> <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
        <div className="cv-download">
          <a href={require("../Assets/cv/Ravi.pdf")} download="myFile">
            Download cv
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
