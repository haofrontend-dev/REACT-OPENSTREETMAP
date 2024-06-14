import React from "react";
import { Box } from "@mui/material";
import ProfilePicker from "@/components/ProfilePicker";

const DirectionsControl = () => {
    const handleUpdateProfile = (profile) => {
        console.log(profile);
    };
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <ProfilePicker
                        profiles={[
                            "bicycle",
                            "pedestrian",
                            "car",
                            "truck",
                            "bus",
                            "motor_scooter",
                            "motorcycle",
                        ]}
                        popupContent={[
                            "Bicycle",
                            "Pedestrian",
                            "Car",
                            "Truck",
                            "Bus",
                            "Motor Scooter",
                            "Motorcycle",
                        ]}
                        handleUpdateProfile={handleUpdateProfile}
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default DirectionsControl;
