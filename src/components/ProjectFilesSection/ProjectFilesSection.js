import ProjectFilesTable from "../ProjectFilesTable/ProjectFilesTable";
import UploadCard from "../UploadCard/UploadCard";
import styles from "./ProjectFilesSection.module.css";

const ProjectFilesSection = ({
  uploadCards,
  onOpen,
  projectFiles,
  onDelete,
}) => {
  return (
    <div className={styles.projectFilesSection}>
      <h2 className={styles.title}>Sample Project</h2>
      <div className={styles.cards}>
        {uploadCards.map((card) => (
          <UploadCard
            key={card.id}
            card={card}
            onOpen={onOpen}
            uploadCardSmall={true}
          />
        ))}
      </div>
      <div>
        <ProjectFilesTable projectFiles={projectFiles} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default ProjectFilesSection;
