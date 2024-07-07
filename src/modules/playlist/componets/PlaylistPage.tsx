// app/album/[id]/page.tsx
"use client";
import { usePathname } from "next/navigation";
import { Box, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import TrackList from "@/components/track-list/TrackList";
import { demomusic } from "@/modules/homepage/data/demo-music-data";

const PlaylistPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const album = demomusic
    .flatMap((category) => category.albums)
    .find((album) => album.id === id);

  if (!album) {
    return <Typography>Album not found</Typography>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 2,
          borderRadius: 2,
          width: "100%",
          textAlign: "left",
          color: "white",
        }}
      >
        <Box
          component="img"
          src={album.image}
          alt={album.name}
          sx={{ width: 250, height: 250, borderRadius: 1 }}
        />

        <Box
          sx={{
            marginLeft: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
              {album.name}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Artist:
              </Typography>
              {"  "}
              {album.artist.join(", ")}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Label:
              </Typography>
              {"  "}
              {album.label.join(", ")}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Release Date:
              </Typography>
              {"  "}
              {album.releaseDate}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Genres:
              </Typography>
              {"  "}
              {album.genres.join(", ")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
              sx={{ textTransform: "none", marginRight: 2 }}
            >
              Play All
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
              <FavoriteBorderIcon sx={{ marginRight: 1 }} />
              <Typography>58.4k</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
              <ShareIcon sx={{ marginRight: 1 }} />
              <Typography>2,446</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
              <ChatBubbleOutlineIcon sx={{ marginRight: 1 }} />
              <Typography>2,203</Typography>
            </Box>
            <IconButton sx={{ color: "white" }}>
              <DownloadIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box mt={10}>
        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {album.name}
        </Typography>
      </Box>

      <Box mt={4}>
        <TrackList tracks={album.tracks} />
      </Box>
    </Box>
  );
};

export default PlaylistPage;
