import { Pencil } from "lucide-react";
import styles from "./TranscriptSection.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useProjects } from "../Hooks/useProjects";

const TranscriptSection = () => {
  const { projectFiles, setProjectFiles } = useProjects();

  const location = useLocation();
  console.log(location.state.item);
  const item = location.state.item;
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedDescription, setEditedDescription] = useState(item.description);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  const handleDiscard = () => {
    console.log("helo");
    setEditedName(item.name);
    setEditedDescription(item.description);
    setIsEditing(false);
  };

  const handleSaveAndExit = () => {
    const updatedFiles = projectFiles.map((file) =>
      file.id === item.id
        ? { ...file, name: editedName, description: editedDescription }
        : file
    );
    setProjectFiles(updatedFiles);
    navigate(-1);
  };

  return (
    <div className={styles.transcriptSection}>
      <div className={styles.header}>
        <h2 className={styles.transcriptTitle}>Edit Transcript</h2>
        {isEditing && (
          <div className={styles.headerButtons}>
            <button
              className={`btn btn-sm ${styles.discardBtn}`}
              onClick={handleDiscard}
            >
              Discard
            </button>
            <button
              className={`btn btn-small ${styles.saveBtn}`}
              onClick={handleSaveAndExit}
            >
              Save & exit
            </button>
          </div>
        )}
      </div>
      <div className={styles.editingSection}>
        <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
          <Pencil />
          Edit Mode
        </button>
        <div className={styles.editContentWrapper}>
          <input
            type="text"
            value={editedName}
            readOnly={!isEditing}
            ref={nameInputRef}
            onChange={(e) => setEditedName(e.target.value)}
            className={styles.nameInput}
          />
          <textarea
            value={editedDescription}
            readOnly={!isEditing}
            className={styles.descriptionInput}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TranscriptSection;
