import { useRef, useState } from "react";
import styles from "./ChatIconConfig.module.css";
import { ChevronDown, Upload } from "lucide-react";

const options = {
  chatIconSizes: [
    { value: "small", label: "Small (48x48 px)" },
    { value: "medium", label: "Medium (72x72 px)" },
    { value: "large", label: "Large (96x96 px)" },
  ],
  positions: [
    { value: "bottomRight", label: "Bottom Right" },
    { value: "bottomLeft", label: "Bottom Left" },
    { value: "topRight", label: "Top Right" },
    { value: "topLeft", label: "Top Left" },
  ],
};

const ChatIconConfig = () => {
  const [chatIconSize, setChatIconSize] = useState("small");
  const [positionOnScreen, setPositionOnScreen] = useState("bottomRight");
  const [distanceFromBottom, setDistanceFromBottom] = useState("20");
  const [horizontalDistance, setHorizontalDistance] = useState("20");
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

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
    <div className={styles.chatIconConfig}>
      <div>
        <label className={styles.label}>Chat Icon Size</label>
        <br />
        <div className={styles.selectWrapper}>
          <select
            value={chatIconSize}
            onChange={(e) => setChatIconSize(e.target.value)}
            className={styles.input}
          >
            {options.chatIconSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className={styles.arrow} />
        </div>
      </div>
      <div>
        <label className={styles.label}>Position on Screen</label>
        <br />
        <div className={styles.selectWrapper}>
          <select
            value={positionOnScreen}
            onChange={(e) => setPositionOnScreen(e.target.value)}
            className={styles.input}
          >
            {options.positions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className={styles.arrow} />
        </div>
      </div>
      <div>
        <label className={styles.label} htmlFor="distanceBottom">
          Distance from Bottom (in px)
        </label>
        <br />
        <input
          type="text"
          id="distanceBottom"
          name="distanceBottom"
          className={styles.input}
          value={distanceFromBottom}
          onChange={(e) => setDistanceFromBottom(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="horizontalDistance">
          Horizontal Distance (in px)
        </label>
        <br />
        <input
          type="text"
          id="horizontalDistance"
          name="horizontalDistance"
          className={styles.input}
          value={horizontalDistance}
          onChange={(e) => setHorizontalDistance(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label}>Bot Icon</label>
        <br />
        <div className={styles.uploadWrapper}>
          <div className={styles.imageWrapper}>
            {image ? (
              <img src={image} alt="Bot Icon" className={styles.image} />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            )}
          </div>

          <div className={styles.uploadbtnWrapper}>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <button
              className="btn btn-small btn-purple"
              onClick={handleUploadClick}
            >
              Upload Image <Upload />
            </button>
            <span>Recommended Size: 48x48px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatIconConfig;
