import React from "react";
import ArticleCard from "./ArticleCard";
import { Row, Col } from "react-bootstrap";

const ArticleCards = ({ articles }) => {
  return (
    <Row md={2} xl={3}>
      {articles &&
        articles.map((article, index) => {
          if (index < 3) {
            <Col md={6} xl={3} key={article.id}>
              <ArticleCard key={article.id} article={article}></ArticleCard>
            </Col>;
          }
        })}
    </Row>
  );
};

export default ArticleCards;
