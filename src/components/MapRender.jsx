import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useContextGlobal } from "../providers/contexts/GlobalContext";

const icon = L.icon({
    iconUrl: "./images/place.png",
    iconSize: [38, 38],
});

const MapRender = () => {
    const { location } = useContextGlobal();
    if (!location.length) {
        return <div>Loading...</div>; // Hiển thị loading khi chưa có tọa độ
    }

    console.log(location);
    return (
        <MapContainer
            center={location}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapRender;
