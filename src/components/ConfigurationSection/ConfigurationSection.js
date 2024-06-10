import { useState } from "react";
import styles from "./ConfigurationSection.module.css";
import GeneralConfig from "../GeneralConfig/GeneralConfig";
import DisplayConfig from "../DisplayConfig/DisplayConfig";

const ConfigurationSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className={styles.configurationSection}>
      <h2 className={styles.configurations}>Configurations</h2>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              activeTab === "general" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "display" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("display")}
          >
            Display
          </div>
        </div>
        <div className={styles.tabContent}>
          {activeTab === "general" && <GeneralConfig />}
          {activeTab === "display" && <DisplayConfig />}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationSection;
