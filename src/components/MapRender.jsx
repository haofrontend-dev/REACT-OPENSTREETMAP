import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'

const icon = L.icon({
    iconUrl: './images/place.png',
    iconSize: [38, 38]
})

const MapRender = () => {
    const position = [12.2387911, 109.1967488]; // Coordinates
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapRender;
