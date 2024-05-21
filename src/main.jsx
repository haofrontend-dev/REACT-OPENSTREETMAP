import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import "./fix-leaflet-marker";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import router from "./routes";
import store from "./stores";
import { GlobalProvider } from "./providers/contexts/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalProvider>
                <RouterProvider router={router} />
            </GlobalProvider>
        </Provider>
    </React.StrictMode>
);
