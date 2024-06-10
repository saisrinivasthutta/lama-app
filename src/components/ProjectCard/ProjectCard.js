import styles from "./ProjectCard.module.css";
import { getInitials } from "../../utils/getInitials";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`projects/${project.id}/upload`}
      style={{ "text-decoration": "none" }}
    >
      <div className={styles.projectCard}>
        <div
          className={styles.projectAvatar}
          style={{ backgroundColor: project.color }}
        >
          {getInitials(project.name)}
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectData}>
            <h1 className={styles.projectName}>{project.name}</h1>
            <p className={styles.projectEpisodes}>
              {project.episodes} Episodes
            </p>

            <span className={styles.projectLastEdited}>
              Last edited {project.lastEdited}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
