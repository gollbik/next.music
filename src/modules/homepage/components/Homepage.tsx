// app/page.tsx
import React from "react";
import SliderComponent from "./slider/Slider";
import { Box, Typography } from "@mui/material";
import { demomusic } from "../data/demo-music-data";
import CardList from "@/components/album-list/AlbumList";

const Homepage = () => {
  const getAlbumsByTitle = (title: string) => {
    const category = demomusic.find((item) => item.title === title);
    return category ? category.albums : [];
  };

  return (
    <Box>
      <SliderComponent />
      <Box mt={4}>
        <Typography sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}>
          Greatest Hits
        </Typography>
        <CardList albums={getAlbumsByTitle("Greatest Hits")} />
      </Box>

      <Box mt={4}>
        <Typography sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}>
          New Releases
        </Typography>
        <CardList albums={getAlbumsByTitle("New Releases")} />
      </Box>
    </Box>
  );
};

export default Homepage;
