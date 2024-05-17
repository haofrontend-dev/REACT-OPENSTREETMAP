import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Hotels from "../pages/hotel";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                redirect: '/',
                element: <Hotels />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
