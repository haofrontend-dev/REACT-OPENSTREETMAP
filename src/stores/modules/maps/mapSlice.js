import { createSlice } from "@reduxjs/toolkit";

import { searchMaps } from "./mapThunk";
const initialState = {
    lists: [],
    loading: false,
    error: null,
    latlongs: [],
};

const mapSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchMaps.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchMaps.fulfilled, (state, actions) => {
            state.loading = false;
            state.lists = actions.payload;
        });
        builder.addCase(searchMaps.rejected, (state, actions) => {
            state.error = actions.error;
        });
    },
});

export default mapSlice.reducer;
export const { ordered } = mapSlice.actions;
