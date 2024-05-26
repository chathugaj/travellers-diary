import React from "react";
import {ArticleCardContainer, Banner} from "../components";
import ContentSearch from "./posts/ContentSearch"
import {SearchResultProvider} from "../contexts/SearchContext";

const Home = () => {
    return (
        <>
            <Banner title="Traverler's Diary" actionButton={true}></Banner>
            {/*<SearchResultProvider>*/}
                <ContentSearch forwardTo={'posts'}></ContentSearch>
                <ArticleCardContainer></ArticleCardContainer>
            {/*</SearchResultProvider>*/}
        </>
    );
};

export default Home;
