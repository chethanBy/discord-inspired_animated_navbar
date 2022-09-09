import React, { useState } from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  const [color, setColor] = useState("");

  const handleDark = () => {
    const body = window.document.querySelector("body");
    setColor((e) => {
      if (e === "") {
        body.classList.add("dark");
        return "dark";
      } else {
        body.classList.remove("dark");
        return "";
      }
    });
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  bg-white  text-slate-200 shadow-lg dark:bg-gray-900 dark:text-white sidebar transition-all duration-500">
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="32" />} />
      <SidebarIcon icon={<BsGearFill size="32" />} />
      <SidebarIcon icon={<FaFire size="32" />} />
      <SidebarIcon dark={handleDark} />
    </div>
  );
};

const SidebarIcon = ({
  icon,
  /*This is default prop */ text = "tooltip 💡",
  dark = null,
}) => {
  return (
    // tailwindcss group doesnt work well in apply directive
    <div
      className="sidebar-icon group cursor-pointer"
      onClick={() => {
        if (dark === null) return;
        dark();
      }}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
