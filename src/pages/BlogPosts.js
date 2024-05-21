import React, {useEffect} from "react";
import {ContentSearch, SearchResultContainer} from "../components";
import fetchDefaults from "../api/fetchDefaults";
import {SearchResultProvider, useSearchResult} from "../contexts/SearchContext";

const BlogPosts = () => {
    return (
        <SearchResultProvider>
            <ContentSearch></ContentSearch>
            <SearchResultContainer ></SearchResultContainer>
        </SearchResultProvider>
    );
};

export default BlogPosts;
