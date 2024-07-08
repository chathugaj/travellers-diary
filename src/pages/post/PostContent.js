import { Col, Row } from "react-bootstrap";
import React from "react";

const PostContent = ({ post }) => {
  return (
    <Row>
      <Col md={10} lg={8} className="mx-auto">
        <p>{post?.body}</p>
      </Col>
    </Row>
  );
};

export default PostContent;
