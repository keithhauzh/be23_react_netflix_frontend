import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

// utils
import { getShows } from "../../utils/api";

export default function CustomizedTables() {
  const [genre, setGenre] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getShows().then((listData) => {
      setList(listData);
    });
  }, []);

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <Header />
      <Container>
        <h1>Tv Shows</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "15px 0",
          }}
        >
          <FormControl variant="filled" style={{ minWidth: 220 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Filter By Genre
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={genre}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TableList list={list} />
      </Container>
    </div>
  );
}
