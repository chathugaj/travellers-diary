import {createContext, useContext, useEffect, useState} from "react";
import axios from "../api/axiosDefaults";
import {useCurrentUser} from "./CurrentUserContext";

export const CurrentProfileContext = createContext();
export const SetCurrentProfileContext = createContext();

export const useCurrentProfile = () => useContext(CurrentProfileContext);
export const useSetCurrentProfile = () => useContext(SetCurrentProfileContext);

export const CurrentProfileProvider = ({children}) => {
    const [currentProfile, setCurrentProfile] = useState(null)
    const currentUser = useCurrentUser()

    const handleMount = async () => {
        try {
            const {data} = await axios.get(`profiles/${currentUser?.id}`);
            setCurrentProfile(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (currentUser) {
            handleMount();
        }
    }, [currentUser]);


    return (
        <CurrentProfileContext.Provider value={currentProfile}>
            <SetCurrentProfileContext.Provider value={setCurrentProfile}>
                {children}
            </SetCurrentProfileContext.Provider>
        </CurrentProfileContext.Provider>
    );
}