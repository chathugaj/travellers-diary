import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SectionHeader = () => {
  return (
    <Container>
      <Row md={2} xl={3}>
        <Col>
          <h1>Latest Posts</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHeader;
