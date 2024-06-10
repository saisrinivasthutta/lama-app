import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { Settings } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("projects");
  const [id, setId] = useState(localStorage.getItem("projectId"));

  const sidebarItems = [
    { label: "Projects", link: `/projects/${id}/upload` },
    {
      label: "Widget Configurations",
      link: `/projects/${id}/widget-configurations`,
    },
  ];

  const pathToLabelMap = {
    [`/projects/${id}/upload`]: "Projects",
    [`/projects/${id}/transcript`]: "Projects",
    [`/projects/${id}/widget-configurations`]: "Widget Configurations",
    [`/account-settings`]: "Account Settings",
  };

  useEffect(() => {
    setActiveItem(pathToLabelMap[location.pathname] || "");
    setId(localStorage.getItem("projectId"));
  }, [location.pathname]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Link to="/" style={{ "text-decoration": "none" }}>
          <Logo />
        </Link>
        <p>Podcast Update Flow</p>
      </div>
      <ul className={styles.linksWrapper}>
        {sidebarItems.map((item, index) => (
          <li key={index} onClick={() => setActiveItem(item.label)}>
            <Link
              style={{ "text-decoration": "none" }}
              to={item.link}
              className={`${styles.link} ${
                activeItem === item.label ? styles.active : ""
              }`}
            >
              <span>{index + 1}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr className={styles.line} />
      <div className={styles.sidebarFooter}>
        <hr className={styles.line} />
        <Link
          style={{ "text-decoration": "none" }}
          to="/account-settings"
          className={`${styles.link} ${
            activeItem === "Account Settings" ? styles.active : ""
          }`}
        >
          <span>
            <Settings />
          </span>
          Settings
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
