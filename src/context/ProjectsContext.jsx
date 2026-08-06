import { createContext } from "react";
import Projects from "../data/Projects";
export const ProjectsContext = createContext();
export function ProjectsProvider({ children }) {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
}
