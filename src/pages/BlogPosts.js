import React from "react";
import {Banner, ContentSearch, SearchResultContainer} from "../components";
import {SearchResultProvider} from "../contexts/SearchContext";

const BlogPosts = () => {
    return (
        <>
            <Banner title="Search The Diary"></Banner>
            <SearchResultProvider>
                <ContentSearch></ContentSearch>
                <SearchResultContainer></SearchResultContainer>
            </SearchResultProvider>
        </>
    );
};

export default BlogPosts;
