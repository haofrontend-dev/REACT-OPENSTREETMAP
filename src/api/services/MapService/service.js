import request from "@/api/axios.client";
import { MapEndpoints } from "./config";

class MapService {
    searchMap = ({ keySearch }) => {
        const params = {
            q: keySearch,
            format: "jsonv2",
            polygon_geojson: 1,
            countrycodes: "VN",
            dedupe: 0,
            addressdetails: 1,
        };

        return request({
            url: MapEndpoints.searchMap(),
            method: "GET",
            params: {
                ...params,
            },
        });
    };

    getLocationDriver = async () => {
        try {
            const response = await fetch("/data/latlogMaker.json", {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            throw new Error(error);
        }
    };
}

export default new MapService();
