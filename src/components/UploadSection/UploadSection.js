import UploadCard from "../UploadCard/UploadCard";
import styles from "./UploadSection.module.css";

const UploadSection = ({ uploadCards, onOpen }) => {
  return (
    <div className={styles.uploadSection}>
      <h1 className={styles.uploadTitle}>Upload</h1>
      <div className={styles.cards}>
        {uploadCards.map((card) => (
          <UploadCard key={card.id} card={card} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
};

export default UploadSection;
