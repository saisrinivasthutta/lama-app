import { format } from "date-fns";
import styles from "./ProjectFilesTable.module.css";
import { useNavigate, useParams } from "react-router-dom";

const ProjectFilesTable = ({ projectFiles, onDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = (item) => {
    navigate(`/projects/${id}/transcript`, { state: { item } });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Upload Date & Time</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projectFiles.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{format(new Date(item.createdAt), "dd MMM yy | HH:mm")}</td>
            <td>{item.status}</td>
            <td>
              <div className={styles.btnWrapper}>
                <button
                  className={`btn ${styles.editBtn}`}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className={`btn ${styles.deleteBtn}`}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectFilesTable;
