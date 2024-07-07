// components/album-list/AlbumList.tsx
"use client";
import React from "react";
import { Box } from "@mui/material";
import AlbumCards from "../album-card/AlbumCard";
import { DemoMusic } from "~/modules/homepage/types/demomusic";

interface CardListProps {
  albums: DemoMusic["albums"];
}

const CardList: React.FC<CardListProps> = ({ albums }) => {
  return (
    <Box display="flex" justifyContent="center">
      {albums.map((album) => (
        <AlbumCards
          key={album.id}
          image={album.image}
          name={album.name}
          id={album.id}
        />
      ))}
    </Box>
  );
};

export default CardList;
