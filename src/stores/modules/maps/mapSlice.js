import { createSlice } from "@reduxjs/toolkit";

import { searchMaps } from "./mapThunk";
const initialState = {
    lists: [],
    loading: false,
    error: null,
};

const mapSlice = createSlice({
    name: "cake",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchMaps.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchMaps.fulfilled, (state, actions) => {
            state.loading = false;
            state.lists = actions.payload
        })
    },
});

export default mapSlice.reducer;
export const { ordered } = mapSlice.actions;
