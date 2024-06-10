import styles from "./Layout.module.css";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AppHeader from "../AppHeader/AppHeader";
import { useEffect } from "react";

const Layout = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      localStorage.setItem("projectId", id);
    }
  }, [id]);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
