import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1890FF",
    },
  },
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "0.5rem 1rem",
          background: "#e2e2e2",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          background: "#e2e2e2",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflowWrap: "anywhere",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
        },
        sizeSmall: {
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        },
        paddingNone: { padding: 0 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          justifyContent: "flex-start",
          alignItems: "flex-end",
        },
        paper: {
          margin: 0,
          width: "100%",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "1rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        autoComplete: "off",
      },
    },
  },
});

export default theme;
