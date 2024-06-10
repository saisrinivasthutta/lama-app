import { Link, useLocation } from "react-router-dom";
import styles from "./AppHeader.module.css";
import { useProjects } from "../Hooks/useProjects";
import { useEffect, useState } from "react";
import { Bell, ChevronDown, Home } from "lucide-react";
import flag from "../../assets/images/flag.svg";
const AppHeader = () => {
  const { projects } = useProjects();
  const [projectName, setProjectName] = useState("");

  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    if (pathParts[0] === "projects" && pathParts[1]) {
      const project = projects.find((project) => project.id === pathParts[1]);
      if (project) {
        setProjectName(project.name);
      }
    } else {
      setProjectName("");
    }
  }, [pathParts, projects]);

  return (
    <header className={styles.appHeader}>
      <div className={styles.navigation}>
        <Link
          to="/"
          className={styles.home}
          style={{ "text-decoration": "none" }}
        >
          <Home size={30} />
        </Link>
        /
        {pathParts[0] === "projects" && pathParts[1] && (
          <>
            <Link
              style={{ "text-decoration": "none" }}
              to={`/projects/${pathParts[1]}`}
            >
              {projectName}
            </Link>
            {pathParts[2] && (
              <>
                {" / "}
                <Link
                  style={{ "text-decoration": "none" }}
                  to={`/projects/${pathParts[1]}/${pathParts[2]}`}
                  className={styles.activeLink}
                >
                  {pathParts[2].replace("-", " ")}
                </Link>
              </>
            )}
          </>
        )}
        {pathParts[0] === "account-settings" && (
          <>
            <Link to="/account-settings" className={styles.activeLink}>
              Account Settings
            </Link>
          </>
        )}
      </div>
      <div className={styles.headerRight}>
        <div className={styles.language}>
          <ChevronDown size={30} />
          EN
          <img src={flag} alt="flag" />
        </div>
        <button className="btn btn-icon">
          <Bell />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
