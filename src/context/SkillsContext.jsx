import { createContext } from "react";
import { skills } from "../data/skills";
export const skillsContext = createContext();
export function SkillsProvider({ children }) {
  return (
    <skillsContext.Provider value={skills}>{children}</skillsContext.Provider>
  );
}
