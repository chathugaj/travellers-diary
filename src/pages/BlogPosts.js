import React from "react";
import {Banner} from "../components";
import ContentSearch from "./posts/ContentSearch"
import SearchResultContainer from "./posts/SearchResultContainer";

const BlogPosts = () => {
    return (
        <>
            <Banner title="Search The Diary"></Banner>
            {/*<SearchResultProvider>*/}
                <ContentSearch></ContentSearch>
                <SearchResultContainer />
            {/*</SearchResultProvider>*/}
        </>
    );
};

export default BlogPosts;
