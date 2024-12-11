import * as React from "react";

import { useEffect, useState } from "react";

import TableList from "../../components/TableList";

// form
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// box
import Box from "@mui/material/Box";

// container
import Container from "@mui/material/Container";

// navbar
import Header from "../../components/Header";

// ultils
import { getMovies, getGenres } from "../../utils/api";

function Movies() {
  const [genre, setGenre] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [list, setList] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data);
    });
  }, []); // only when page first loaded

  useEffect(() => {
    getMovies(genre).then((data) => {
      setList(data);
    });
  }, [genre]); // only when genre is changed

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      {/* Nav */}

      <Header />

      <Container>
        <h1>Movies</h1>

        {/* dropdown menu */}
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Filter By Genre
            </InputLabel>
            <Select
              labelId="demo-controll  ed-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={genre}
              label="Genre"
              onChange={handleChange}
            >
              {genres.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>

        <TableList list={list} />
      </Container>
    </Box>
  );
}

export default Movies;
