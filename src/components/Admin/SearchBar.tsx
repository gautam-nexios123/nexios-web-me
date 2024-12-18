import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  wFull?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search here",
  wFull,
}) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: "25px" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .css-5h82ro-MuiInputBase-root-MuiInput-root::after ": {
          borderBottom: "2px solid #D8942E",
        },
        width: { xs: "100%", sm: wFull ? "100%" : "auto" },
      }}
      variant="standard"
    />
  );
};

export default SearchBar;
