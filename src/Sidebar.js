import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="32" />} />
      <SidebarIcon icon={<BsGearFill size="32" />} />
      <SidebarIcon icon={<FaFire size="32" />} />
    </div>
  );
};

const SidebarIcon = ({
  icon,
  /*This is default prop */ text = "tooltip 💡",
}) => (
  // tailwindcss group doesnt work well in apply directive
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
