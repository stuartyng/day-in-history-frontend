import { useMediaQuery } from "@mui/material";
import React, { useEffect, useReducer, useContext, useMemo, createContext } from "react";
import { useSelector } from "react-redux";
import CommonUIWrapper from "../components/wrappers/CommonUIWrapper";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

function reducer(state, { type, payload }) {
  return {
    ...state,
    [type]: payload,
  };
}

const INIT_STATE = {
  domain: localStorage?.getItem("Domain") || "All",
  locationId: localStorage?.getItem("LocationId") || "",
  authorId: "",
  collectionType: "All",
  searchKey: "",

  jsonViewerData: null,
};

export default function AppContextProvider({ children }) {
  const [state, setState] = useReducer(reducer, INIT_STATE);

  const domains = useSelector((store) => store.Domain.domains);
  const locations = useSelector((store) => store.Location.locations);

  const isMobile = useMediaQuery(`(max-width: 600px)`);
  const isMediumScreen = useMediaQuery(`(max-width: 1200px)`);

  const isSuperAdmin = useSelector((store) => store.auth.PrivateInfo?.role === "superAdmin");
  const userDomain = useSelector((store) => store.auth.PrivateInfo?.domain);
  const setDomain = (value) => setState({ type: "domain", payload: value });
  const setLocationId = (value) => setState({ type: "locationId", payload: value });
  const setCollectionType = (value) => setState({ type: "collectionType", payload: value });
  const setAuthorId = (value) => setState({ type: "authorId", payload: value });
  const setSearchKey = (value) => setState({ type: "searchKey", payload: value });
  const setJsonViewerData = (value) => setState({ type: "jsonViewerData", payload: value });

  useEffect(() => {
    if (isSuperAdmin) {
      if (!state.domain) {
        setDomain(localStorage.getItem("Domain") || "All");
      }
    } else {
      if (userDomain) {
        setDomain(userDomain);
      }
    }
    if (state.domain) {
      localStorage.setItem("Domain", state.domain);
    }
  }, [isSuperAdmin, state.domain, userDomain]);

  useEffect(() => {
    if (state.domain && state.domain !== "All") {
      const filtered = locations?.filter((t) => t.domain === state.domain);
      if (filtered?.length === 1) {
        setLocationId(filtered[0]?.id);
      }
    }
  }, [state.domain, locations]);

  useEffect(() => {
    if (state.locationId) {
      localStorage?.setItem("LocationId", state.locationId || "");
    }
  }, [state.locationId]);

  return (
    <AppContext.Provider
      value={useMemo(
        () => [
          { ...state, isSuperAdmin, isMobile, isMediumScreen },
          { setDomain, setAuthorId, setLocationId, setCollectionType, setSearchKey, setJsonViewerData },
        ],
        [state, isSuperAdmin, isMobile, isMediumScreen]
      )}
    >
      <CommonUIWrapper></CommonUIWrapper>
      {children}
    </AppContext.Provider>
  );
}
