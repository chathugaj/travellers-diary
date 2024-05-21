import React from "react";
import {ArticleCardContainer, Banner, ContentSearch} from "../components";
import {SearchResultProvider} from "../contexts/SearchContext";

const Home = () => {
    return (
        <>
            <Banner title="Traverler's Diary"></Banner>
            <SearchResultProvider>
                <ContentSearch></ContentSearch>
                <ArticleCardContainer></ArticleCardContainer>
            </SearchResultProvider>
        </>
    );
};

export default Home;
