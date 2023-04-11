import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AppContext from "../helpers/AppContext";
import "./Sidebar.css";

import {
  FaHome,
  FaUsers,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBuilding
  // FaBuildingUser
} from "react-icons/fa";

export function Sidebar() {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <SidebarItem to="/" text="Ubytovania" icon={<UserBuildingIcon />} />
        <SidebarItem to="/najomnici" text="Nájomníci" icon={<FaUser />} />
        <SidebarItem to="/lozka" text="Lôžka" icon={<FaBuilding />} />
        <SidebarItem to="/users" text="Užívatelia" icon={<FaUsers />} />
        <SidebarItem to="/settings" text="Nastavenia" icon={<FaCog />} />
      </div>
      <div>---</div>
      <SidebarItem
        to="#"
        text="Odhlásiť sa"
        onClick={handleLogout}
        additionalClass="logout"
        icon={<FaSignOutAlt />}
      />
    </div>
  );
}

export function SidebarItem({ to, text, onClick, icon, additionalClass }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`sidebar-item ${additionalClass}`}
    >
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-text">{text}</span>
    </NavLink>
  );
}

const UserBuildingIcon = () => (
  <span style={{ position: "relative", display: "inline-block" }}>
    <FaBuilding
      size="1em"
      style={{ position: "relative", bottom: 0, right: 5 }}
    />
    <FaUser
      size="0.75em"
      style={{ position: "absolute", bottom: 4, right: -5 }}
    />
  </span>
);
