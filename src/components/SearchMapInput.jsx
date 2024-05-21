import React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

// * IMPORT
import { useAppDispatch } from "../hooks/useRedux";
import { searchMaps } from "../stores/modules/maps/mapThunk";

const SearchMapInput = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const dispatch = useAppDispatch();
    // Debounce function để dispatch searchMaps0);

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };

    const handleSubmit = () => {
        dispatch(searchMaps(searchValue));
    }

    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={handleChange}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={handleSubmit}>
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
            >
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchMapInput;
