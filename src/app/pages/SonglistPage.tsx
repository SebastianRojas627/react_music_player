import { Container, Typography } from "@mui/material";
import AppLayout from "../../layouts/AppLayout";
import { SongList } from "../components/SongList";
import SearchBar from "../components/SearchBar";
import { useStore } from "../../context/ContextProvider";

export const SonglistPage = () => {
  const { songs } = useStore();

  return (
    <>
      <AppLayout>
        <Container>
          <Typography variant="h3" gutterBottom>
            Song List
          </Typography>
          <SearchBar />
          <SongList songs={songs} />
        </Container>
      </AppLayout>
    </>
  );
};
