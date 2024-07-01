import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios, { axiosReq, axiosRes } from "../api/axiosDefaults";
import * as fetchIntercept from "fetch-intercept";
import { getCookie } from "../helpers/commonHelper";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = (path) => {
    window.location.href = `${window.location.origin}/${path}`;
  };

  const handleMount = async () => {
    // try {
    //   const { data } = await axios.get("dj-rest-auth/user/");
    //   setCurrentUser(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    const unregister = fetchIntercept.register({
      request: function (url, config) {
        config.headers = {
          ...config.headers,
          "X-CSRF-TOKEN": getCookie("csrftoken"),
          "X-CSRFToken": getCookie("csrftoken"),
        };
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

    unregister();
    // axiosReq.interceptors.request.use(
    //   async (config) => {
    //     try {
    //       await axios.post("/dj-rest-auth/token/refresh/");
    //     } catch (err) {
    //       setCurrentUser((prevCurrentUser) => {
    //         if (prevCurrentUser) {
    //           navigate("signin");
    //         }
    //         return null;
    //       });
    //       return config;
    //     }
    //     return config;
    //   },
    //   (err) => {
    //     return Promise.reject(err);
    //   }
    // );
    // axiosRes.interceptors.response.use(
    //   (response) => response,
    //   async (err) => {
    //     if (err.response?.status === 401) {
    //       try {
    //         await axios.post("/dj-rest-auth/token/refresh/");
    //       } catch (err) {
    //         setCurrentUser((prevCurrentUser) => {
    //           if (prevCurrentUser) {
    //             navigate("signin");
    //           }
    //           return null;
    //         });
    //       }
    //       return axios(err.config);
    //     }
    //     return Promise.reject(err);
    //   }
    // );
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
