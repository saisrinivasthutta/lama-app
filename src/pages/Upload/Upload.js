import youtube from "../../assets/images/youtube.svg";
import spotify from "../../assets/images/spotify.svg";
import rss from "../../assets/images/rss.svg";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadSection from "../../components/UploadSection/UploadSection";
import UploadModal from "../../components/UploadModal/UploadModal";
import ProjectFilesSection from "../../components/ProjectFilesSection/ProjectFilesSection";
import { useProjects } from "../../components/Hooks/useProjects";

const uploadCards = [
  {
    id: "1",
    image: youtube,
    name: "Youtube",
    label: "Youtube Video",
  },
  {
    id: "2",
    image: spotify,
    name: "Spotify",
    label: "Spotify Podcast",
  },
  {
    id: "3",
    image: rss,
    name: "RSS",
    label: "RSS Feed",
  },
];

const Upload = () => {
  const { projectFiles, setProjectFiles } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleAddFile = (name, description) => {
    setProjectFiles((prev) => [
      ...prev,
      {
        id: uuidv4().slice(0, 8),
        name,
        description,
        status: "Done",
        createdAt: new Date(),
      },
    ]);
  };

  const handleDeleteFile = (id) => {
    setProjectFiles(projectFiles.filter((file) => file.id !== id));
  };

  console.log(projectFiles);
  return (
    <>
      {projectFiles.length === 0 ? (
        <UploadSection uploadCards={uploadCards} onOpen={handleOpenModal} />
      ) : (
        <ProjectFilesSection
          uploadCards={uploadCards}
          onOpen={handleOpenModal}
          projectFiles={projectFiles}
          onDelete={handleDeleteFile}
        />
      )}

      {isModalOpen && (
        <UploadModal
          onClose={handleModalClose}
          card={selectedCard}
          onAdd={handleAddFile}
        />
      )}
    </>
  );
};

export default Upload;
