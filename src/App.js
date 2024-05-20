import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogPosts from "./pages/BlogPosts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import React, {createContext} from "react";

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext();

function App() {
    const [currentUser, setCurrentUser] = React.useState(null);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="posts" element={<BlogPosts/>}/>
                        </Route>
                        <Route path="signup" element={<SignUp/>}/>
                        <Route path="signin" element={<SignIn/>}/>
                        <Route path="forgot_password" element={<ForgotPassword/>}/>
                    </Routes>
                </BrowserRouter>
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
