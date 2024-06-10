import { Link } from "react-router-dom";
import { Home, PlusCircle } from "lucide-react";
import styles from "./NoProject.module.css";
import podcast from "../../assets/images/podcast.svg";

const NoProjects = ({ handleOpenModal }) => {
  return (
    <div className={styles.noProjects}>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn btn-badge">
            <Home />
            Back to Home
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.noProjectTitle}>Create a New Project</h1>
        <img src={podcast} alt="" />
        <p className={styles.description}>
          Discover, stream, and enjoy your favorite podcasts like never before
          with PodStream! Our intuitive and user-friendly app offers a seamless
          experience for podcast enthusiasts, whether you're a casual listener
          or a podcast aficionado. Whether you're looking to learn something
          new, get entertained, or stay informed, PodStream has something for
          everyone.
        </p>
        <button onClick={handleOpenModal} className={styles.createBtn}>
          <PlusCircle size={56} />
          Create New Project
        </button>
      </div>
    </div>
  );
};

export default NoProjects;
