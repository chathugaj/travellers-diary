import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {CurrentUserProvider} from "./contexts/CurrentUserContext";
import {CurrentProfileProvider} from "./contexts/ProfileContext";
import {SearchResultProvider} from "./contexts/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <CurrentUserProvider>
            <CurrentProfileProvider>
                <SearchResultProvider>
                    <App/>
                </SearchResultProvider>
            </CurrentProfileProvider>
        </CurrentUserProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
