import styles from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";
const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="logo" />
      <h1 className={styles.logoText}>POD STREAM</h1>
    </div>
  );
};

export default Logo;
