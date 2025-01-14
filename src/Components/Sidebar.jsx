import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Sidebar.css";
import homeIcon from "../assets/icons/Vector.png";
import charticon from "../assets/icons//chart.png";
import aiicon from "../assets/icons/ai.png";
import plusicon from "../assets/icons/Group 766.png";
import profile from "../assets/icons/s@2x.png";

function Sidebar() {
  const [active, setActive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { id: 1, icon: homeIcon },
    { id: 2, icon: charticon },
    { id: 3, icon: aiicon },
    { id: 4, icon: plusicon },
    { id: 5, icon: profile },
  ];

  const handleClick = (id) => {
    setActive(id);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="menu-icon">{isOpen ? <FaTimes /> : <FaBars />}</div>
      </div>
      <div className={`sidebar ${isOpen ? "active" : ""}`}> 
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${active === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
