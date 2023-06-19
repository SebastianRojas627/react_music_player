import { Button } from "@mui/material";
import { useStore } from "../../context/ContextProvider";
import AppLayout from "../../layouts/AppLayout";
import SongInfo from "../components/SongInfo";
import { useNavigate, useParams } from "react-router-dom";
import ControllerButtons from "../components/ControllerButtons";
import { useRef, useState } from "react";

export const PlayerPage = () => {
  const { songId } = useParams();
  const navigate = useNavigate();
  const { songs } = useStore();
  let song = songs[Number(songId) - 1];
  const [playing, setPlaying] = useState(true);
  const myAudio = useRef();

  const playPause = () => {
    if (playing) {
      setPlaying(false);
      if (myAudio.current !== null) {
        myAudio.current.pause();
      }
    } else {
      setPlaying(true);
      if (myAudio.current !== null) {
        myAudio.current.play();
      }
    }
  };

  const playNext = () => {
    setPlaying(true);
    if (myAudio.current !== null) {
      myAudio.current.pause();
    }
    if (Number(songId) != songs.length) {
      navigate(`/player/${song.id + 1}`);
    } else {
      navigate(`/player/1`);
    }
  };

  const playPrevious = () => {
    setPlaying(true);
    if (myAudio.current !== null) {
      myAudio.current.pause();
    }
    if (Number(songId) != 1) {
      navigate(`/player/${song.id - 1}`);
    } else {
      navigate(`/player/${songs.length}`);
    }
  };

  return (
    <>
      <AppLayout>
        <audio src={song.songSrc} preload="auto" autoPlay ref={myAudio} />
        <Button variant="text" onClick={() => navigate("/")}>
          Return
        </Button>
        <SongInfo song={song} />
        <ControllerButtons
          playPause={playPause}
          playNext={playNext}
          playPrevious={playPrevious}
        />
      </AppLayout>
    </>
  );
};
