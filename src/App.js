import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Mona Lisa",
      artist: "Valntn, Peter Fenn, Tray Haggerty",
      img_src: "./images/monalisa-bg.jpg",
      altText: "Mona Lisa - Valntn cover art",
      src: "./music/VLNTN - Mona Lisa.mp3",
    },
    {
      title: "Day by Day",
      artist: "Fiji Blue",
      img_src: "./images/fiji-song-bg.jpg",
      altText: "Day by Day - Fiji Blue cover art",
      src: "./music/Fiji Blue - Day by Day.mp3",
    },
    {
      title: "Feel Good",
      artist: "Syn Cole",
      img_src: "./images/feelgood-bg.jpg",
      altText: "Feel Good - Syn cole cover art",
      src: "./music/Syn Cole - Feel Good.mp3",
    },
    {
      title: "Angel Boy",
      artist: "William Bolton",
      img_src: "./images/angel-boy.jpg",
      altText: "Angel Boy - William Bolton cover art",
      src: "./music/William Bolton - Angel Boy.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
