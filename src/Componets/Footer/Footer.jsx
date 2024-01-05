import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Tranding"
          icon={<WhatshotIcon />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          component={NavLink}
          to="/movies"
        />
        <BottomNavigationAction
          label="TV Series"
          icon={<TvIcon />}
          component={NavLink}
          to="/series"
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          component={NavLink}
          to="/search"
        />
      </BottomNavigation>
    </Box>
  );
}
