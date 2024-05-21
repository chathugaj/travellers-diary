import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {
    SearchResultPaginator,
    SearchResultViewer,

} from "../components";
import styles from "../styles/SearchResultContainer.module.css";
import {useSearchResult} from "../contexts/SearchContext";

const SearchResultContainer = () => {
    const articles = useSearchResult()

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
