import { useState, useContext, createContext, useEffect } from "react";

interface MovimentsContextProps {
  sheetIsOpen: boolean;
  toggleSheet: () => void;
}

export const MovimentsContext = createContext<MovimentsContextProps>(
  {} as MovimentsContextProps
);

export const MovimentsProvaider = ({ children }: any) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  function toggleSheet() {
    setSheetIsOpen((prevState) => !prevState);
  }

  return (
    <MovimentsContext.Provider value={{ sheetIsOpen, toggleSheet }}>
      {children}
    </MovimentsContext.Provider>
  );
};

export const useMoviments = () => {
  const context = useContext(MovimentsContext);
  return context;
};
