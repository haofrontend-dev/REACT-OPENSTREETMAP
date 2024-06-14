import {
    MapContainer,
    TileLayer,
    useMap,
    ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useContextGlobal } from "../providers/contexts/GlobalContext";
import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import ShowCrimes from "./ShowCrimes";


const ResetCenterView = (props) => {
    // eslint-disable-next-line react/prop-types
    const { location } = props;
    const map = useMap();

    React.useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (location.length > 0) {
            map.setView(L.latLng(location[0], location[1]), map.getZoom(), {
                animate: true,
            });
        }
    }, [location, map]);

    return null;
};

const MapRender = () => {
    const { location } = useContextGlobal();
    const { lists } = useAppSelector((state) => state.maps);

    if (!location.length) {
        return <div>Loading...</div>; // Hiển thị loading khi chưa có tọa độ
    }

    return (
        <MapContainer
            center={location}
            zoom={15}
            scrollWheelZoom={true}
            style={{ width: "100%", minHeight: "100%" }}
            zoomControl={false}
            height="100%"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {Array.isArray(lists) &&
                lists.length > 0 &&
                lists.map((map, index) => (
                    <Marker
                        key={index}
                        position={[map.latitude, map.longitude]}
                        icon={icon}
                    >
                        <Popup>
                            <strong>lat: {map.latitude} </strong>
                            <strong>long {map.longitude}</strong>
                        </Popup>
                    </Marker>
                ))} */}
            {location.length > 0 && <ResetCenterView location={location} />}
            <ZoomControl position="topleft" />{" "}
            <ShowCrimes data={lists} />
            {/* Add ZoomControl with desired position */}
        </MapContainer>
    );
};

export default MapRender;
