import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const SocialLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <a
          href="https://x.com/SatyamYada21567?s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <FaTwitter />
        </a>
      </li>
      <li onClick={handleNav}>
        <a
          href="https://www.linkedin.com/in/satyam-yadav-738773290/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <FaLinkedin />
        </a>
      </li>
      <li onClick={handleNav}>
        <a
          href="https://github.com/satyamyadav04"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <BsGithub />
        </a>
      </li>
      <li onClick={handleNav}>
        <a
          href="mailto:satyam87yadav@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
