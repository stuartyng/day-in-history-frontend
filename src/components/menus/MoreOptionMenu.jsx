import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { actionMenuPaperProps, actionMenuPaperPropsLeft } from "../../utils/styles";
import { isIos } from "../../utils";

function MoreOptionMenu({ menus, anchorEl, onClose, isLeft = false }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      PaperProps={isLeft ? actionMenuPaperPropsLeft : actionMenuPaperProps}
      transformOrigin={{ horizontal: isLeft ? "left" : "right", vertical: "top" }}
      anchorOrigin={{ horizontal: isLeft ? "left" : "right", vertical: "bottom" }}
    >
      {menus
        .filter((t) => !!t)
        .map((menu, index) =>
          menu.tooltip ? (
            <Tooltip title={menu?.tooltip} key={index}>
              <MenuItem
                onClick={() => {
                  onClose();
                  menu.onClick();
                }}
                disabled={!!menu?.disabled}
                dense
              >
                {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
                <ListItemText>{menu.title}</ListItemText>
              </MenuItem>
            </Tooltip>
          ) : (
            <MenuItem
              key={index}
              onClick={() => {
                onClose();
                menu.onClick();
              }}
              disabled={!!menu?.disabled}
              dense
            >
              {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
          )
        )}
    </Menu>
  );
}

MoreOptionMenu.defaultProps = { menus: [], anchorEl: null };

export default MoreOptionMenu;
