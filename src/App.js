import { useState } from "react";

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
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
