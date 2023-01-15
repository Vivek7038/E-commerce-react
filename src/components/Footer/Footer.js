import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="container py-4 text-center">
        <div className="flex align-center justify-center text-white fw-3 fs-14">
          <Link to="/" className="text-uppercase">
            privacy policy
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase">
            term of service
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase">
            About Us
          </Link>
        </div>
        <span className="text-white copyright-text text-manrope fs-14 fw-3">
          &copy; 2022 Buysmart. All Rights Reserved.
        </span>
        <article className="text-white copyright-text text-manrope fs-14 fw-3">
          <a href="https://www.instagram.com/vivek_chavan34/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-chavan-65030a16b"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Vivek7038/E-commerce-react"
            target={"blank"}
          >
            <AiFillGithub />
          </a>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
