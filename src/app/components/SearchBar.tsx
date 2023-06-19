import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  return (
    <Container>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          pb: 5,
        }}
      >
        <TextField fullWidth label="search" id="search" />
      </Box>
    </Container>
  );
}
