import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchMaps = createAsyncThunk("search/map", async (key) => {
    console.log(key);
    return key
});
