import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import play_arrow from "../../assets/play_arrow.svg";
import next from "../../assets/next.png";
import previous from "../../assets/previous.png";
import { Box } from "@mui/material";

export default function ControllerButtons({
  playPause,
  playNext,
  playPrevious,
}) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={playPrevious}>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
            maxHeight: { xs: 100 },
            maxWidth: { xs: 150 },
            alignItems: "center",
            justifyContent: "center",
          }}
          alt="Cover"
          src={previous}
        />
      </Button>
      <Button onClick={playPause}>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
            maxHeight: { xs: 100 },
            maxWidth: { xs: 150 },
            alignItems: "center",
            justifyContent: "center",
          }}
          alt="Cover"
          src={play_arrow}
        />
      </Button>
      <Button onClick={playNext}>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
            maxHeight: { xs: 100 },
            maxWidth: { xs: 150 },
            alignItems: "center",
            justifyContent: "center",
          }}
          alt="Cover"
          src={next}
        />
      </Button>
    </ButtonGroup>
  );
}
