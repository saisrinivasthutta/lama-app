import { createContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectFiles, setProjectFiles] = useState([]);
  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, projectFiles, setProjectFiles }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
