import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const routes = [
    { name: "Home", path: "/", icon: <InboxIcon /> },
    { name: "About", path: "/about", icon: <MailIcon /> },
    { name: "Contact", path: "/contact", icon: <InboxIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "black",
          color: "white",
          marginTop: "50px",
        },
      }}
    >
      <Box sx={{ overflow: "auto", marginTop: "50px" }}>
        <List>
          {routes.map((route) => (
            <ListItem key={route.name} disablePadding>
              <ListItemButton
                component="a"
                href={route.path}
                sx={{
                  "&:hover .MuiListItemText-primary": {
                    color: "#4949F3",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
