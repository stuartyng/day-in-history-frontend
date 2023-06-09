import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Paper, Box } from "@mui/material";
import SidebarDrawer from "./SidebarDrawer";
import { useLayoutContext } from "../contexts/LayoutContext";

function PageLayout() {
  return (
    <>
      <SidebarDrawer></SidebarDrawer>
      <Outlet></Outlet>
    </>
  );
}

export default PageLayout;
