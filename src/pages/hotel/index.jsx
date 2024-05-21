import { Grid, Box } from "@mui/material";

import SearchMapInput from "../../components/SearchMapInput";
import MapListHotels from '../../components/MapListHotels/List'
import MapRender from "../../components/MapRender";
const Dashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Box>
                    <SearchMapInput />
                    <MapListHotels />
                </Box>
            </Grid>
            <Grid item xs={7}>
                <Box sx={{
                    width: '100%',
                    height: '100vh'
                }} >
                    <MapRender />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
