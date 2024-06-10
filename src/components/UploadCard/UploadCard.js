import styles from "./UploadCard.module.css";
const UploadCard = ({ card, onOpen, uploadCardSmall }) => {
  return (
    <div
      className={
        uploadCardSmall ? styles.uploadCardSmall : styles.uploadCardLarge
      }
      onClick={() => onOpen(card)}
    >
      <div>
        <img src={card.image} alt={card.label} className={styles.cardImage} />
      </div>
      <h4 className={styles.label}>
        {card.label === "RSS Feed" ? (
          <span>Upload from</span>
        ) : (
          <span>Upload</span>
        )}
        <span> {card.label}</span>
      </h4>
    </div>
  );
};

export default UploadCard;
