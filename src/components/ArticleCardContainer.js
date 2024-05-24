import React from "react";
import {Container} from "react-bootstrap";
import ArticleCards from "./ArticleCards";
import SectionHeader from "./SectionHeader";
import styles from "../styles/ArticleCardContainer.module.css";
import {useSearchResult} from "../contexts/SearchContext";

const ArticleCardContainer = () => {
    const {results} = useSearchResult()

    return (
        <Container className={styles.CardContainer}>
            <SectionHeader title="Latest Posts"></SectionHeader>
            <ArticleCards articles={results}></ArticleCards>
        </Container>
    );
};

export default ArticleCardContainer;
