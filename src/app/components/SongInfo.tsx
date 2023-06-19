import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const SongInfo = ({ song }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={song.src} title="cover" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {song.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" component="div">
          {song.artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {song.albumName}
        </Typography>
        <Typography variant="body1" color="text.secondary" component="div">
          {song.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(SongInfo);
