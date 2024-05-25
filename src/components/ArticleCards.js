import React from "react";
import ArticleCard from "./ArticleCard";
import { Row, Col } from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

const ArticleCards = ({articles}) => {
    const getArticleCards = (articles) => {
        let articleCards = [];
        for (let article of articles) {
            if (articleCards?.length < 3) {
                articleCards.push(
                    <Col key={article.id} >
                        <ArticleCard key={article.id} article={article}></ArticleCard>
                    </Col>
                )
            } else {
                break;
            }
        }
        return articleCards;
    }

  return (
    <Row md={2} xl={3}>
        {getArticleCards(articles)}
    </Row>
  );
};

export default ArticleCards;
