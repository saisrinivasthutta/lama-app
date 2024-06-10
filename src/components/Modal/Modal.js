import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add(styles.noScroll);

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
