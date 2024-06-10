import { useState, useRef } from "react";
import { Upload, Camera } from "lucide-react";

import styles from "./SettingsSection.module.css";
const SettingsSection = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.settingsSection}>
      <h2 className={styles.settingsTitle}>Account Settings</h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {image ? (
            <img src={image} alt="Bot Icon" className={styles.image} />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full"></div>
          )}
          <input
            id="uploadImage"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />{" "}
          <br />
        </div>
        <div>
          <button
            className="btn btn-small btn-primary"
            onClick={handleUploadClick}
          >
            Upload Profile <Camera color="white" size={48} />
          </button>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
