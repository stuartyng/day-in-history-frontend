import React from "react";
import { Backdrop, Drawer as MuiDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLayoutContext } from "../contexts/LayoutContext";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(7)})`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SidebarDrawer() {
  const [{ sidebarOpened }, { setSidebarOpened }] = useLayoutContext();

  const handleDrawerToggle = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <Drawer
      variant={"permanent"}
      open={sidebarOpened}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      // PaperProps={{ sx: { background: "#040040" } }}
    >
      <Sidebar></Sidebar>
    </Drawer>
  );
}

export default SidebarDrawer;
