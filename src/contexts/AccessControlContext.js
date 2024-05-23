import {createContext} from "react";

export const AccessControlContext = createContext();


export const AccessControlProvider = ({children}) => {
    console.log("always on fire");
    return (
        <AccessControlContext.Provider>
            {children}
        </AccessControlContext.Provider>
    );
}