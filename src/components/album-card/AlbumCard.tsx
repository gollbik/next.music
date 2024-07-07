// components/album-card/AlbumCard.tsx
"use client";
import React from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

interface CardProps {
  image: string;
  name: string;
  id: string;
}

const AlbumCards: React.FC<CardProps> = ({ image, name, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/album/${id}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{ maxWidth: 200, margin: 2, cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        sx={{ borderRadius: 1 }}
      />
      <Box>
        <Typography sx={{ mt: 1, fontSize: "14px", fontWeight: 300 }}>
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default AlbumCards;
