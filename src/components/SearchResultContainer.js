import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  SearchResultPaginator,
  SearchResultViewer,

} from "../components";
import styles from "../styles/SearchResultContainer.module.css";

function SearchResultContainer({articles}) {
  return (
    <Container className={styles.SearchResultContainer}>
      <Row>
        <Col>
          <SearchResultViewer articles={articles}></SearchResultViewer>
          {/*<SearchResultPaginator data={articles}></SearchResultPaginator>*/}
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResultContainer;
