import { useEffect, useRef } from "react";
import music from "../../assets/music/Ed Sheeran-Perfect.mp3";

export default function MusicPlayer({ playing }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <audio
      ref={audioRef}
      src={music}
      loop
    />
  );
}