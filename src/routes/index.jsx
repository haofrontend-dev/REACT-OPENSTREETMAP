import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MapPage from "../pages/Map";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                redirect: '/',
                element: <MapPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
