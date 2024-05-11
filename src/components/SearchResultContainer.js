import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  SearchResultPaginator,
  SearchResultViewer,
  SearchSidebar,
} from "../components";
import styles from "../styles/SearchResultContainer.module.css";

function SearchResultContainer() {
  return (
    <Container className={styles.SearchResultContainer}>
      <Row>
        <Col md={4} lg={3}>
          <SearchSidebar></SearchSidebar>
        </Col>
        <Col md={8} lg={9}>
          <SearchResultViewer></SearchResultViewer>
          <SearchResultPaginator></SearchResultPaginator>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResultContainer;
