import {createContext, useContext, useEffect, useState} from "react";
import {axiosRes} from "../api/axiosDefaults";
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
            const {data} = await axiosRes.get("profiles/", {params: {owner: currentUser?.pk}});
            setCurrentProfile(data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, [currentUser]);


    return (
        <CurrentProfileContext.Provider value={currentProfile}>
            <SetCurrentProfileContext.Provider value={setCurrentProfile}>
                {children}
            </SetCurrentProfileContext.Provider>
        </CurrentProfileContext.Provider>
    );
}