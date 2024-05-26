import React from "react";
import ArticleCard from "./ArticleCard";
import {Row, Col} from "react-bootstrap";

const ArticleCards = ({articles}) => {
    const getArticleCards = (articles) => {
        let articleCards = [];
        for (let article of articles) {
            if (articleCards?.length < 3) {
                articleCards.push(
                    <Col key={article.id}>
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
            {articles.map((article, index) => {
                if (index < 3) {
                    <Col md={6} xl={3} key={index}>
                        <ArticleCard key={article.id} article={article}></ArticleCard>
                    </Col>
                }
            })}
        </Row>
    );
};

export default ArticleCards;
