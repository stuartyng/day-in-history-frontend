import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  ListItemIcon,
  ListItemText,
  Tooltip,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Logout as IconLogout, AccountCircle as IconAccountCircle, Menu as IconMenu } from "@mui/icons-material";
import { actionMenuPaperProps } from "../utils/styles";
import { useConfirm } from "material-ui-confirm";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.up("md")]: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export const AppBarMenuWrapper = ({ children, onClick }: any) => {
  const theme = useTheme();
  return (
    <Box sx={{ borderBottom: "3px solid #5305B6", py: 0.5, mr: 1, position: "relative", bottom: -3 }}>
      <Typography
        fontWeight="500"
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: theme.palette.text.primary,
          pl: 1.5,
          pr: 1,
        }}
        onClick={(e) => {
          onClick(e);
        }}
        variant="body2"
      >
        {children}
      </Typography>
    </Box>
  );
};

interface IAppBarProps {
  title: string;
}

const Appbar = ({ title }: IAppBarProps) => {
  const confirm = useConfirm();
  const theme = useTheme();
  const navigate = useNavigate();

  const [{ sidebarOpened, isMdScreen }, { setSidebarOpened }] = useLayoutContext();

  const [openDeletePrompt, setOpenDeletePrompt] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <Box className="appbar-wrapper">
      <AppBar position="fixed" sx={{ pr: 1 }}>
        <Toolbar disableGutters>
          {!isMdScreen && (
            <Box sx={{ width: theme.spacing(7) }} display="flex" alignItems="center" justifyContent="center">
              <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
                <IconMenu></IconMenu>
              </IconButton>
            </Box>
          )}
          <Box display="flex" flex={1}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                  <IconAccountCircle fontSize="large"></IconAccountCircle>
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={actionMenuPaperProps}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                dense
                onClick={() => {
                  navigate("/signin");
                  handleCloseUserMenu();
                }}
              >
                <ListItemIcon>
                  <IconLogout fontSize="small" />
                </ListItemIcon>
                <ListItemText>Sign In</ListItemText>
              </MenuItem>
              <MenuItem
                dense
                onClick={() => {
                  handleCloseUserMenu();
                }}
              >
                <ListItemIcon>
                  <IconLogout fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Appbar.defaultProps = {
  LeftActionBar: <></>,
  actionBar: <></>,
};

export default Appbar;
