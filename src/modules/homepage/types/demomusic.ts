export type DemoMusic = {
  id: string;
  title: string;
  albums: Album[];
};

export type Album = {
  id: string;
  name: string;
  artist: string[];
  genres: string[];
  label: string[];
  releaseDate: string;
  image: string;
  tracks: Track[];
};

export interface Track {
  title: string;
  artist: string;
  album: string;
}
