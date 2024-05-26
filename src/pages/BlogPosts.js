import React from "react";
import {Banner} from "../components";
import ContentSearch from "./posts/ContentSearch"
import SearchResultContainer from "./posts/SearchResultContainer";
import {SearchResultProvider} from "../contexts/SearchContext";

const BlogPosts = () => {
    // const [posts, setPosts] = React.useState({results: []});
    return (
        <>
            <Banner title="Search The Diary"></Banner>
            <SearchResultProvider>
                <ContentSearch></ContentSearch>
                <SearchResultContainer />
            </SearchResultProvider>
        </>
    );
};

export default BlogPosts;
