import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogPosts from "./pages/BlogPosts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import React from "react";
import "./api/axiosDefaults";

function App() {

    return (
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
    );
}

export default App;