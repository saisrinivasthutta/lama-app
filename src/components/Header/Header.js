import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
      <div className={styles.headerButtons}>
        <button className="btn btn-icon">
          <Settings size={44} />
        </button>
        <button className="btn btn-icon">
          <Bell size={44} />
        </button>
      </div>
    </header>
  );
};

export default Header;
