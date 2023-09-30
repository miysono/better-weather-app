import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (context === undefined)
    throw new Error(
      "useLayoutContext was used outside of the LayoutContextProvider!"
    );
  return context;
};

export { useLayoutContext };
