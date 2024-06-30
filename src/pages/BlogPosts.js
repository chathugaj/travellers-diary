import React from "react";
import { Banner } from "../components";
import ContentSearch from "./posts/ContentSearch";
import SearchResultContainer from "./posts/SearchResultContainer";
import { Container } from "react-bootstrap";

const BlogPosts = () => {
  return (
    <>
      <Banner title="Search The Diary"></Banner>
      <Container fluid>
        <ContentSearch></ContentSearch>
        <SearchResultContainer />
      </Container>
    </>
  );
};

export default BlogPosts;
