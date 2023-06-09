import React from "react";
import { Box } from "@mui/material";
import { useLayoutContext } from "../contexts/LayoutContext";

interface PageWrapperProps {
  children?: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [{ sidebarOpened }] = useLayoutContext();
  return (
    <Box sx={{ pl: { xs: 0, md: sidebarOpened ? "240px" : 7 }, transition: "all 0.5s" }}>
      <Box sx={{ px: { xs: 0.25, md: 2 } }}>{children}</Box>
    </Box>
  );
}
