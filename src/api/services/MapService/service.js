import request from "../../axios.client";
import { MapEndpoints } from "./config";

class MapService {
    searchMap = ({ keySearch }) => {
        const params = {
            q: keySearch,
            format: "jsonv2",
            polygon_geojson: 1,
            countrycodes: 'VN',
            dedupe: 0
        };

        return request({
            url: MapEndpoints.searchMap(),
            method: "GET",
            params: {
                ...params,
            },
        });
    };
}

export default new MapService();
