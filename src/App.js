import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogPosts from "./pages/BlogPosts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import React from "react";
import "./api/axiosDefaults";
import PostPage from "./pages/PostPage";
import ContentEditor from "./pages/ContentEditor";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="posts" element={<BlogPosts/>}/>
                    <Route path="posts/:id" element={<PostPage/>}/>
                    <Route path="editor" element={<ContentEditor/>} />
                    <Route path="profiles/:id" element={<Profile/>}/>
                    <Route path="contactus" element={<ContactUs/>}/>
                </Route>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="signin" element={<SignIn/>}/>
                <Route path="forgot_password" element={<ForgotPassword/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;