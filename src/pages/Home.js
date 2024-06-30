import React from "react";
import { ArticleCardContainer, Banner } from "../components";
import ContentSearch from "./posts/ContentSearch";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Banner title="Traverler's Diary" actionButton={true}></Banner>
      <Container fluid>
        <ContentSearch forwardTo={"posts"}></ContentSearch>
        <ArticleCardContainer></ArticleCardContainer>
      </Container>
    </>
  );
};

export default Home;
