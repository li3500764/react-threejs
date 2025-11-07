import React from "react";
import { socialImgs } from "../constants";

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">请访问我的博客</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} alt={img.alt} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️ {new Date().getFullYear()} Lorian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
