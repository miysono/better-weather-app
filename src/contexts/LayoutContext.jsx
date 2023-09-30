import { createContext, useState } from "react";

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [detailedView, setDetailedView] = useState({
    isDetailed: false,
    index: null,
  });

  return (
    <LayoutContext.Provider
      value={{ isLayoutOpen, setIsLayoutOpen, detailedView, setDetailedView }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutProvider, LayoutContext };
