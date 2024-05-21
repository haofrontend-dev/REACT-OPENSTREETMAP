import React from "react";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, ListItemButton } from "@mui/material";

import { useAppSelector } from "../../hooks/useRedux";
import { useContextGlobal } from "../../providers/contexts/GlobalContext";

// eslint-disable-next-line react/prop-types
const ListHotel = () => {
    const { lists, loading } = useAppSelector((state) => state.maps);
    const { setLocation } = useContextGlobal();
    if (loading) {
        return <Box>...Loading</Box>;
    }
    return (
        <List
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                marginTop: "10px",
                boxShadow: 1,
            }}
        >
            {Array.isArray(lists) &&
                lists.length > 0 &&
                lists.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItemButton
                            alignItems="flex-center"
                            onClick={() => setLocation([item?.lat, item?.lon])}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/images/place.png"
                                />
                            </ListItemAvatar>
                            <ListItemText primary={item.display_name} />
                        </ListItemButton>
                    </React.Fragment>
                ))}
        </List>
    );
};

export default ListHotel;
