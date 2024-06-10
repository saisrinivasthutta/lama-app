import { useState } from "react";
import Header from "../../components/Header/Header";
import NoProjects from "../../components/NoProject/NoProject";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

import styles from "./Home.module.css";
import CreateProductModal from "../../components/CreateProductModal/CreateProductModal";
import { generateRandomColor } from "../../utils/generateRandomColor";
import { v4 as uuidv4 } from "uuid";
import { useProjects } from "../../components/Hooks/useProjects";

const Home = () => {
  const { projects, setProjects } = useProjects();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: uuidv4().slice(0, 8),
        name: newProject,
        episodes: 4,
        lastEdited: "a week ago",
        color: generateRandomColor(),
      },
    ]);
  };

  return (
    <div>
      <div className={styles.contentWrapper}>
        <Header />
        {projects.length === 0 ? (
          <NoProjects handleOpenModal={handleOpenModal} />
        ) : (
          <ProjectsSection
            projects={projects}
            handleOpenModal={handleOpenModal}
          />
        )}
      </div>
      {isModalOpen && (
        <CreateProductModal
          onClose={handleCloseModal}
          createProject={createProject}
          projects={projects}
        />
      )}
    </div>
  );
};

export default Home;
