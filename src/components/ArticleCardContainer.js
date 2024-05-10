import React from "react";
import { Container } from "react-bootstrap";
import ArticleCards from "./ArticleCards";
import SectionHeader from "./SectionHeader";
import styles from "../styles/ArticleCardContainer.module.css";

const ArticleCardContainer = () => {
  return (
    <Container className={styles.CardContainer}>
      <SectionHeader></SectionHeader>
      <ArticleCards></ArticleCards>
    </Container>
  );
};

export default ArticleCardContainer;
