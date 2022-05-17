import React from "react";
import "./Contact.modules.css";
export default function Contact() {
  return (
    <div className="connect">
      <div className="social-icons float">
        <a
          href="https://www.linkedin.com/in/ravi-sanker-chinta-20b464a9/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Monk19" target="_blank">
          {" "}
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:ravichinta@gmail.com" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-sanker-chinta-20b464a9/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-sanker-chinta-20b464a9/"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
