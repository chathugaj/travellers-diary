import React from "react";
import {Container} from "react-bootstrap";
import ArticleCards from "./ArticleCards";
import SectionHeader from "./SectionHeader";
import styles from "../styles/ArticleCardContainer.module.css";
import {useSearchResult} from "../contexts/SearchContext";

const ArticleCardContainer = () => {
    const articles = useSearchResult()

    return (
        <Container className={styles.CardContainer}>
            <SectionHeader></SectionHeader>
            <ArticleCards articles={articles}></ArticleCards>
        </Container>
    );
};

export default ArticleCardContainer;
