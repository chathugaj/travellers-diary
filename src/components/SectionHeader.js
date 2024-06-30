import React from "react";
import { Row, Col } from "react-bootstrap";

const SectionHeader = ({ title }) => {
  return (
    <Row md={2} xl={3}>
      <Col>
        <h1>{title}</h1>
      </Col>
    </Row>
  );
};

export default SectionHeader;
