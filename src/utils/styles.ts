export const actionMenuPaperProps = {
  style: {
    width: "auto",
    minWidth: 160,
  },
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export const actionMenuPaperPropsLeft = {
  style: {
    width: "auto",
    minWidth: 160,
  },
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export const folderSelectionMenuPaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    // filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 0.5,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 20,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
