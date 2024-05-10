import React from "react";
import ArticleCard from "./ArticleCard";
import { Row, Col } from "react-bootstrap";

const ArticleCards = () => {
  return (
    <Row md={2} xl={3}>
      <Col>
        <ArticleCard></ArticleCard>
      </Col>
      <Col>
        <ArticleCard></ArticleCard>
      </Col>
      <Col>
        <ArticleCard></ArticleCard>
      </Col>
    </Row>
  );
};

export default ArticleCards;
