import { useState, useRef, useEffect } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/abhishekkabi/song.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-music">
      <button className="play-button" onClick={togglePlayPause}>
        {isPlaying ? (
          <i class="fa-solid fa-pause"></i>
        ) : (
          <i class="fa-solid fa-play"></i>
        )}
      </button>
      <div className="song-name-place">
        <div className={`scroll-track ${isPlaying ? "animate" : ""}`}>
          <p className="song-name">Spiritual Antiseptic ft. Hallucinogen</p>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
