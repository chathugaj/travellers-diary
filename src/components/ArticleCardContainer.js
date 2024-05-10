import React from "react";
import { Container } from "react-bootstrap";
import ArticleCards from "./ArticleCards";
import SectionHeader from "./SectionHeader";

const ArticleCardContainer = () => {
  return (
    <div>
      <Container>
        <SectionHeader></SectionHeader>
        <ArticleCards></ArticleCards>
      </Container>
    </div>
  );
};

export default ArticleCardContainer;
