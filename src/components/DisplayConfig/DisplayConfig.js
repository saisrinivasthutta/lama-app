import { useState } from "react";
import styles from "./DisplayConfig.module.css";

import ColorPicker from "../ColorPicker/ColorPicker";
import ChatIconConfig from "../ChatIconConfig/ChatIconConfig";

const DisplayConfig = () => {
  const [primaryColor, setPrimaryColor] = useState("#1f39cd");
  const [fontColor, setFontColor] = useState("#000000");

  return (
    <div className={styles.displayConfig}>
      <div className={styles.displayTopConfigs}>
        <ColorPicker
          label="Primary Color"
          color={primaryColor}
          setColor={setPrimaryColor}
        />
        <ColorPicker
          label="Font Color"
          color={fontColor}
          setColor={setFontColor}
        />
        <div>
          <label className={styles.label} htmlFor="welcomeMessage">
            Font Size (in px)
          </label>
          <br />
          <input
            type="text"
            id="welcomeMessage"
            name="welcomeMessage"
            className={styles.input}
          />
          <br />
          <span className={styles.span}>
            The customer should be the customer himself
          </span>
        </div>
        <div>
          <label className={styles.label} htmlFor="welcomeMessage">
            Chat Height (in % of total screen)
          </label>
          <br />
          <input
            type="text"
            id="welcomeMessage"
            name="welcomeMessage"
            className={styles.input}
          />
          <br />
          <span className={styles.span}>
            The customer should be the customer himself
          </span>
        </div>
      </div>
      <hr className={styles.horizontal} />
      <ChatIconConfig />
    </div>
  );
};

export default DisplayConfig;
