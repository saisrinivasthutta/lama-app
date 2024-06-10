import { Link } from "react-router-dom";
import { Home, PlusCircle } from "lucide-react";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = ({ projects, handleOpenModal }) => {
  return (
    <div className={styles.projectSection}>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn btn-badge">
            <Home />
            Back to Home
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.title}>Projects</h2>
          <button onClick={handleOpenModal} className={styles.createBtn}>
            <PlusCircle size={36} />
            Create New Project
          </button>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
