import styles from "./ColorPicker.module.css";
import { useRef, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ label, color, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div ref={colorPickerRef}>
          <div
            className={styles.colorPalette}
            style={{ backgroundColor: color }}
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          {isOpen && (
            <div className={styles.colorPicker}>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          )}
        </div>
      </div>
      <span className={styles.span}>
        The customer should be the customer himself
      </span>
    </div>
  );
};

export default ColorPicker;
