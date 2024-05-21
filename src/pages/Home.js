import React from "react";
import {ArticleCardContainer, ContentSearch} from "../components";
import {SearchResultProvider} from "../contexts/SearchContext";

const Home = () => {
    return (
        <SearchResultProvider>
            <ContentSearch></ContentSearch>
            <ArticleCardContainer></ArticleCardContainer>
        </SearchResultProvider>
    );
};

export default Home;
