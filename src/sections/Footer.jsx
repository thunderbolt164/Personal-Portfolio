import React from "react";
import { socialImgs } from "../constants/index";
import { HiArrowDownTray } from "react-icons/hi2";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors"
>
  View Resume
</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©{new Date().getFullYear()}Dhruv Aakash. All rights reversed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
