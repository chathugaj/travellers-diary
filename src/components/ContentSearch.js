import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

import styles from "../styles/ContentSearch.module.css";
import {fetchArticles, useSetSearchResult} from "../contexts/SearchContext";

const ContentSearch = () => {
    const [searchText, setSearchText] = React.useState("");
    const setSearchResult = useSetSearchResult();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchArticles(searchText)
            .then((res) => setSearchResult(res))
    }

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <Container>
            <Row>
                <Form inline="inline" onSubmit={handleSubmit}>
                    <Row>
                        <Col md={9} lg={10} xl={10}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label className="d-none">searchText</Form.Label>
                                <Form.Control type="text" className={styles.SearchInput} name="searchText"
                                              value={searchText} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button
                                type="submit"
                                variant="dark"
                                className={styles.SearchButton}
                            >
                                <i className="bi bi-search"></i> Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    );
};

export default ContentSearch;
