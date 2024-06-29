import React from "react";
import { ArticleCardContainer, Banner } from "../components";
import ContentSearch from "./posts/ContentSearch";

const Home = () => {
  return (
    <>
      <Banner title="Traverler's Diary" actionButton={true}></Banner>
      <ContentSearch forwardTo={"posts"}></ContentSearch>
      <ArticleCardContainer></ArticleCardContainer>
    </>
  );
};

export default Home;
