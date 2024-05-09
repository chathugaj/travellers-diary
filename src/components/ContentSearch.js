import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import styles from "../styles/ContentSearch.module.css";

const ContentSearch = () => {
  return (
    <div>
      <Container>
        <Row>
          <Form inline>
            <Row>
              <Col md={9} lg={10} xl={10}>
                <Form.Control type="text" className={styles.SearchInput} />
              </Col>
              <Col>
                <Button
                  type="submit"
                  variant="dark"
                  className={styles.SearchButton}
                >
                  <i class="bi bi-search"></i> Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ContentSearch;
