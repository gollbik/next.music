import { Box, Typography } from "@mui/material";
import React from "react";

type Track = {
  title: string;
  artist: string;
  album: string;
};

type TrackListProps = {
  tracks: Track[];
};

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      {tracks.map((track, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 1.5,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ width: 20 }}>
              {index + 1}
            </Typography>
            <Box sx={{ marginLeft: 1 }}>
              <Typography variant="body2">{track.title}</Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                {track.artist}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2">{track.album}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TrackList;
