import React from "react";
import './index.css';
const SidebarItem = ({ href, target, imgSrc, alt, className }) => {
  return (
    <div className={`sideBarSpace ${className}`}>
      <a href={href} target={target} rel="noopener noreferrer">
        <img src={imgSrc} alt={alt} className={`${className}Logo`} />
      </a>
    </div>
  );
};
const Sidebar = () => {
  return (
    <div className="sideBar">
      <SidebarItem
        href="https://api.whatsapp.com/send?phone=7236870938&text=Hi"
        target="_blank"
        imgSrc="logo/whatsapp.png"
        alt=""
        className="whatsapp"
      />
      <SidebarItem
        href="tel:9506695760"
        target="_blank"
        imgSrc="logo/call.png"
        alt=""
        className="call"
      />
      <SidebarItem
        href="mailto:akhileshkumarprajapati7706@gmail.com"
        target="_blank"
        imgSrc="logo/mail.png"
        alt=""
        className="mail"
      />
    </div>
  );
};

export default Sidebar;
