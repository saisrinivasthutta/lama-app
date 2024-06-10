import styles from "./GeneralConfig.module.css";

const GeneralConfig = () => {
  return (
    <div className={styles.generalConfig}>
      <div>
        <label className={styles.label} htmlFor="chatbotName">
          Chatbot Name
        </label>
        <br />
        <input
          type="text"
          id="chatbotName"
          name="chatbotName"
          className={styles.input}
        />
        <br />
        <span>The customer should be the customer himself</span>
      </div>
      <div>
        <label className={styles.label} htmlFor="welcomeMessage">
          Welcome Message
        </label>
        <br />
        <input
          type="text"
          id="welcomeMessage"
          name="welcomeMessage"
          className={styles.input}
        />
        <br />
        <span>The customer should be the customer himself</span>
      </div>
      <div>
        <label className={styles.label} htmlFor="inputPlaceholder">
          Input Placeholder
        </label>
        <br />
        <input
          type="text"
          id="inputPlaceholder"
          name="inputPlaceholder"
          className={styles.input}
        />
        <br />
        <span>The customer should be the customer himself</span>
      </div>
    </div>
  );
};

export default GeneralConfig;
