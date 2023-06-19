import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import play_arrow from "../../assets/play_arrow.svg";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function SongList({ songs }) {
  const navigate = useNavigate();
  const calculation = useMemo(() => songSum(songs), [songs]);

  const songSum = (songs) => {
    return songs.length;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ pt: 5, minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cover</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Artist</StyledTableCell>
            <StyledTableCell>Album Name</StyledTableCell>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell>Play</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => (
            <StyledTableRow key={song.id}>
              <StyledTableCell component="th" scope="row">
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 100 },
                    maxWidth: { xs: 150 },
                  }}
                  alt="Cover"
                  src={song.src}
                />
              </StyledTableCell>
              <StyledTableCell>{song.name}</StyledTableCell>
              <StyledTableCell>{song.artistName}</StyledTableCell>
              <StyledTableCell>{song.albumName}</StyledTableCell>
              <StyledTableCell>{song.year}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="text"
                  onClick={() => navigate(`/player/${song.id}`)}
                >
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
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="body1" color="text.secondary" component="div">
        {`Song coung is ${calculation}`}
      </Typography>
    </TableContainer>
  );
}
