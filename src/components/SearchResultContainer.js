import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SearchResultViewer, SearchSidebar } from "../components";
import styles from "../styles/SearchResultContainer.module.css";

function SearchResultContainer() {
  return (
    <Container className={styles.SearchResultContainer}>
      <Row>
        <Col md={4}>
          <SearchSidebar></SearchSidebar>
        </Col>
        <Col md={8}>
          <SearchResultViewer></SearchResultViewer>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResultContainer;