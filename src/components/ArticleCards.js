import React from "react";
import ArticleCard from "./ArticleCard";
import { Row, Col } from "react-bootstrap";

const ArticleCards = ({ articles }) => {
  return (
    <Row md={2} xl={3}>
      {articles &&
        articles?.slice(0, 4)?.map((article, index) => {
          return (
            <Col md={6} xl={3} key={index}>
              <ArticleCard key={article.id} article={article}></ArticleCard>
            </Col>
          );
        })}
    </Row>
  );
};

export default ArticleCards;
