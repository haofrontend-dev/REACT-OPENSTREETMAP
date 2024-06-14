import PropTypes from "prop-types";
import React from "react";
import { Box, Button, Drawer, IconButton, Tab, Tabs } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import DirectionsControl from "./Directions";

export const TabPanel = ({ value, index, children, ...props }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node,
};

export const ServiceTabs = ({ onClose }) => {
    const [keyActive, setKeyActive] = React.useState(0);

    const handleChange = (event, newValue) => {
        setKeyActive(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box display={"flex"} alignItems={"center"} gap={4} justifyContent={'center'}>
                <Box>
                    <Tabs
                        value={keyActive}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Directions" />
                        <Tab label="Isochrones" />
                    </Tabs>
                </Box>

                <IconButton onClick={onClose}>
                    <CloseOutlined />
                </IconButton>
            </Box>

            <TabPanel value={keyActive} index={0}>
                <DirectionsControl />
            </TabPanel>
            <TabPanel value={keyActive} index={1}>
                Tab 2
            </TabPanel>
        </Box>
    );
};

ServiceTabs.propTypes = {
    onClose: PropTypes.func.isRequired,
};

const MainControl = () => {
    const [showDirectionsPanel, setShowDirectionPanle] = React.useState(true);

    const handleDirectionsToggle = () => {
        setShowDirectionPanle((pre) => !pre);
    };

    return (
        <React.Fragment>
            <Button
                color="primary"
                variant="contained"
                sx={{
                    position: "absolute",
                    zIndex: 998,
                    top: "10px",
                    right: "10px",
                }}
                onClick={handleDirectionsToggle}
            >
                Open drawer
            </Button>

            <Drawer
                variant="persistent"
                open={showDirectionsPanel}
                anchor="right"
            >
                <Box
                    width={400}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                >
                    <ServiceTabs onClose={handleDirectionsToggle} />
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

MainControl.propTypes = {
    // define prop types here
};

export default MainControl;
