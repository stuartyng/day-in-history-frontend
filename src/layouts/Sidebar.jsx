import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton as MuiListItemButton,
  styled,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useLayoutContext } from "../contexts/LayoutContext";
import {
  NavigateBefore as IconNavigateBefore,
  NavigateNext as IconNavigateNext,
  Menu as IconMenu,
  Home as IconHome,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useRef } from "react";
import { categories } from "../config";

const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== "sub",
})(({ theme, sub }) => ({
  // "&.Mui-selected": {
  //   background: "rgba(197, 229, 248, 0.5)",
  //   "&:hover": {
  //     background: "rgba(197, 229, 248, 0.5)",
  //   },
  //   ...(sub && {
  //     background: "rgba(197, 229, 248, 0.35)",
  //     "&:hover": {
  //       background: "rgba(197, 229, 248, 0.35)",
  //     },
  //   }),
  // },
}));

const CollapseIconButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 100,
  transition: theme.transitions.create(["all"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: "fixed",
  top: theme.spacing(9),
  left: theme.spacing(5.2),
  width: theme.spacing(3.6),
  height: theme.spacing(3.6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: "2px solid #d2d2d2",
  cursor: "pointer",
  background: "#f2f2f2",
  ...(open && {
    left: `calc(240px - ${theme.spacing(1.8)})`,
  }),
  "&:hover": {
    background: "#ffffff",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function Sidebar() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const PrivateInfo = useSelector((store) => store.auth.PrivateInfo);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const [{ sidebarOpened, isMdScreen }, { setSidebarOpened }] = useLayoutContext();

  const useOutsideClick = (ref, setOpen) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && !isMdScreen) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, isMdScreen]);
  };

  useOutsideClick(ref, setSidebarOpened);

  return (
    <Box sx={{ py: 1, pt: { xs: 1, md: 12 } }} ref={ref}>
      <CollapseIconButton
        open={sidebarOpened}
        onClick={() => {
          setSidebarOpened(!sidebarOpened);
        }}
      >
        {sidebarOpened ? <IconNavigateBefore></IconNavigateBefore> : <IconNavigateNext></IconNavigateNext>}
      </CollapseIconButton>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ pl: 1 }}
            selected={true}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                pl: 1,
                mr: sidebarOpened ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <IconHome></IconHome>
            </ListItemIcon>
            <ListItemText sx={{ opacity: sidebarOpened ? 1 : 0 }} primary="Home" />
          </ListItemButton>
        </ListItem>
        {categories?.map((category) => (
          <ListItem disablePadding>
            <ListItemButton
              sx={{ pl: 1 }}
              selected={true}
              onClick={() => {
                navigate(`/${category.title.toLowerCase()}`);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  pl: 1,
                  mr: sidebarOpened ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <category.icon></category.icon>
              </ListItemIcon>
              <ListItemText sx={{ opacity: sidebarOpened ? 1 : 0 }} primary={category.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
