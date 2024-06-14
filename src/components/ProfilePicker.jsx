import PropTypes from "prop-types";
import { Button, ButtonGroup, Tooltip } from "@mui/material";
import {
    DirectionsBus,
    FireTruckOutlined,
    DirectionsCar,
    DirectionsBike,
    TwoWheelerOutlined,
    MopedOutlined,
    DirectionsRun,
} from "@mui/icons-material";

import React from "react";

const iconMap = {
    truck: <FireTruckOutlined />,
    car: <DirectionsCar />,
    bicycle: <DirectionsBike />,
    pedestrian: <DirectionsRun />,
    motor_scooter: <MopedOutlined />,
    bus: <DirectionsBus />,
    motorcycle: <TwoWheelerOutlined />,
};

/**
 * ProfilePicker component to display and select profiles with icons.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {boolean} loading - Flag to indicate if profiles are loading.
 * @param {Array} popupContent - Array of strings for tooltip content.
 * @param {Array} profiles - Array of profile names.
 * @param {Function} handleUpdateProfile - Function to handle profile update.
 *
 * @returns {JSX.Element} A ButtonGroup component with buttons for each profile, displaying icons and tooltips.
 */
const ProfilePicker = ({
    loading,
    popupContent,
    profiles,
    handleUpdateProfile,
}) => {
    const [activeProfile, setActiveProfile] = React.useState("");

    const handleClickProfile = React.useCallback((profile) => {
        setActiveProfile(profile);
        handleUpdateProfile(profile);
    }, [handleUpdateProfile]);

    return (
        <ButtonGroup size="small" variant="outlined">
            {profiles.map((profile, index) => (
                <Tooltip key={index} title={popupContent[index]}>
                    <Button
                        color={
                            profile === activeProfile ? "primary" : "inherit"
                        }
                        loading={loading}
                        onClick={() => handleClickProfile(profile)}
                    >
                        {iconMap[profile]}
                    </Button>
                </Tooltip>
            ))}
        </ButtonGroup>
    );
};

ProfilePicker.propTypes = {
    profiles: PropTypes.array,
    loading: PropTypes.bool,
    activeProfile: PropTypes.string,
    handleUpdateProfile: PropTypes.func,
    group: PropTypes.string,
    popupContent: PropTypes.array,
};

export default ProfilePicker;
