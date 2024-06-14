import React from "react";
import { Grid, Box } from "@mui/material";

import{ useAppDispatch } from '@/hooks/useRedux';
import MapRender from "@/components/MapRender";
import MainControl from "@/components/Controls";
import { getAllLocationDriver } from "@/stores/modules/maps/mapThunk";
const Dashboard = () => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getAllLocationDriver())
    }, [dispatch])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{
                    width: '100%',
                    height: 'calc(100vh - 170px)',
                    position: 'relative'
                }} >
                    <MapRender />
                    <MainControl />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
