import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="relative" component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Netflix
          </Typography>
          <Box>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Movies
            </Button>
            <Button LinkComponent={Link} to="/shows" sx={{ color: "#fff" }}>
              TV Shows
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
