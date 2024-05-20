import {createContext, useContext, useEffect, useMemo, useState} from "react";
import * as fetchIntercept from "fetch-intercept";
import fetchDefaults from "../api/fetchDefaults";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const skipAuthHeaderUrls = [
        "dj-rest-auth/login",
        "dj-rest-auth/register",
        "dj-rest-auth/token/refresh",
        "dj-rest-auth/token/verify",
    ]

    const handleMount = async () => {
        try {
            const { data } = axios.get(`${fetchDefaults.baseUrl}/dj-rest-auth/user/`, {
                headers: fetchDefaults.headers,
                withCredentials: true,
            });
            setCurrentUser(data)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    function refreshToken(refreshT) {
        fetch(`${fetchDefaults.baseUrl}/dj-rest-auth/token/refresh/`, {
            method: "POST",
            headers: fetchDefaults.headers,
            body: JSON.stringify({ refresh: refreshT })
        }).then(res => {
            const {access, refresh, user} = res.json();
            sessionStorage.setItem("access", access);
            sessionStorage.setItem("refresh", refresh);
            setCurrentUser(user)
        });
    }

    useMemo( () => {
        const unregister = fetchIntercept.register({
            request: async (url, config) => {

                const skipModification= skipAuthHeaderUrls.filter(value => url.includes(value)).length > 0
                if (!skipModification) {
                    const accessToken = sessionStorage.getItem("access")
                    let tokenExpired = false;
                    if (accessToken) {
                        try {
                            const verifyResponse = await fetch(`${fetchDefaults.baseUrl}/dj-rest-auth/token/verify/`, {
                                method: "POST",
                                headers: fetchDefaults.headers,
                                body: JSON.stringify({ token: accessToken })
                            });
                            const { status } = await verifyResponse;

                            if (status === 200) {
                                tokenExpired = false;
                            }
                            if (status === 401) {
                                tokenExpired = true;
                                return Promise.resolve(true)
                            }
                        } catch (error) {
                            console.error("Error:", error);
                        }
                    }

                    if (tokenExpired) {
                        const refreshT = sessionStorage.getItem("refresh")
                        refreshToken(refreshT);
                    }

                    let { headers } = config;
                    headers = {
                        ...headers,
                        "Authorization": `Bearer ${sessionStorage.getItem("access")}`
                    };
                    config = {
                        ...config,
                        headers
                    }
                }
                return [url, config];
            },

            requestError: function (error) {
                return Promise.reject(error);
            },

            response: function (response) {
                return response;
            },

            responseError: function (error) {
                return Promise.reject(error);
            },
        });
    }, [currentUser]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};