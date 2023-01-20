import { createContext, useState, ReactNode, Dispatch } from "react";

interface ClassesProviderProps {
  children?: ReactNode;
}

export type ClassesContextType = {
  activeWeekdayNumber: number;
  setActiveWeekdayNumber: Dispatch<number>;
  activeClassTime: string | null;
  setActiveClassTime: Dispatch<string>;
};

export const ClassesContext = createContext<ClassesContextType>({
  activeWeekdayNumber: new Date().getDay(),
  setActiveWeekdayNumber: () => {},
  activeClassTime: null,
  setActiveClassTime: () => {},
});

export const ClassesProvider = ({ children }: ClassesProviderProps) => {
  const [activeWeekdayNumber, setActiveWeekdayNumber] = useState<number>(
    new Date().getDay()
  );
  const [activeClassTime, setActiveClassTime] = useState<string | null>(null);

  const value = {
    activeWeekdayNumber,
    setActiveWeekdayNumber,
    activeClassTime,
    setActiveClassTime,
  };
  return (
    <ClassesContext.Provider value={value}>{children}</ClassesContext.Provider>
  );
};
