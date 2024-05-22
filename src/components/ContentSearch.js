import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

import styles from "../styles/ContentSearch.module.css";
import appStyles from "../App.module.css";
import {fetchArticles, useSetSearchResult} from "../contexts/SearchContext";
import {useParams, useSearchParams} from "react-router-dom";

const ContentSearch = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get("search") ? searchParams.get("search") : "";
    const [searchText, setSearchText] = useState(search);
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
                                <Form.Label className="d-none" >searchText</Form.Label>
                                <Form.Control type="text" className={styles.SearchInput} name="searchText"
                                              value={searchText} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button
                                type="submit"
                                variant="dark"
                                className={appStyles.CommonButton}
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
