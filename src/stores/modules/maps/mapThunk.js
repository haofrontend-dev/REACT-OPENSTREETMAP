import { createAsyncThunk } from "@reduxjs/toolkit";

import MapService from "@/api/services/MapService/service";

export const searchMaps = createAsyncThunk(
    "search/map",
    async (key, { rejectWithValue }) => {
        try {
            const response = await MapService.searchMap({ keySearch: key });
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const  getAllLocationDriver = createAsyncThunk(
    "get/location/driver",
    async (key, { rejectWithValue }) => {
        try {
            const response = await MapService.getLocationDriver();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
) 