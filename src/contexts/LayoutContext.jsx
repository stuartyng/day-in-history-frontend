import { useMediaQuery } from "@mui/material";
import React, { useReducer, useContext, useMemo, createContext } from "react";

const LayoutContext = createContext();

export function useLayoutContext() {
  return useContext(LayoutContext);
}

function reducer(state, { type, payload }) {
  return {
    ...state,
    [type]: payload,
  };
}

const INIT_STATE = {
  sidebarOpened: false,
};

export default function LayoutContextProvider({ children }) {
  const [state, setState] = useReducer(reducer, INIT_STATE);

  const isSmScreen = useMediaQuery(`(min-width: 600px)`);
  const isMdScreen = useMediaQuery(`(min-width: 900px)`);
  const isLgScreen = useMediaQuery(`(min-width: 1200px)`);
  const isXlScreen = useMediaQuery(`(min-width: 1440px)`);
  const isXxlScreen = useMediaQuery(`(min-width: 1800px)`);

  const setSidebarOpened = (value) => setState({ type: "sidebarOpened", payload: value });

  const isColumnVisible = (column) => {
    if (!column?.visible) return false;
    switch (column?.visible) {
      case "xs":
        return true;
      case "sm":
        return isSmScreen;
      case "md":
        return isMdScreen;
      case "lg":
        return isLgScreen;
      case "xl":
        return isXlScreen;
      default:
        return isLgScreen;
    }
  };

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => [
          { ...state, isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXxlScreen },
          { setSidebarOpened, isColumnVisible },
        ],
        [state, isSmScreen, isMdScreen, isLgScreen, isXlScreen, isXxlScreen]
      )}
    >
      {children}
    </LayoutContext.Provider>
  );
}
