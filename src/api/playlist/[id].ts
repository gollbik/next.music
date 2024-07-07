// pages/api/playlist/[id].ts
import { NextApiRequest, NextApiResponse } from "next";

// Exemplu de date pentru playlist
const playlists = [
  {
    id: "1",
    name: "Echoes of Eternity",
    image:
      "https://source.boomplaymusic.com/group10/M00/06/30/d620df439e0848938e2cc6fe51cb3ee1_464_464.webp",
    // Adaugă alte câmpuri relevante pentru playlist
  },
  {
    id: "2",
    name: "Midnight Symphony",
    image:
      "https://source.boomplaymusic.com/group10/M00/01/23/884754ac8a90470193e4a1f65f3c198e_464_464.webp",
    // Adaugă alte câmpuri relevante pentru playlist
  },
  // Adaugă alte playlisturi după nevoie
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const playlist = playlists.find((p) => p.id === id);

  if (playlist) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({ message: "Playlist not found" });
  }
}
