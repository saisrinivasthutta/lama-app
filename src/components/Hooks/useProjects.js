import { useContext } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";

export const useProjects = () => {
  return useContext(ProjectContext);
};
