import React from "react";
import {ContentSearch, SearchResultContainer} from "../components";
import {SearchResultProvider} from "../contexts/SearchContext";

const BlogPosts = () => {
    return (
        <SearchResultProvider>
            <ContentSearch></ContentSearch>
            <SearchResultContainer ></SearchResultContainer>
        </SearchResultProvider>
    );
};

export default BlogPosts;
