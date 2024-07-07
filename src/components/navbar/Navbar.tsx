"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                fontWeight: "bold",
                fontSize: "30px",
                /*                 color: "#39ff14",
                 */
              },
            }}
          >
            NEXT_MUSIC
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
