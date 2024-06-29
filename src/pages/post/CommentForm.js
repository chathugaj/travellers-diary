import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";
import axios from "axios";

const CommentForm = ({ currentUser, post, setCommentUpdated }) => {
  const [commentData, setCommentData] = React.useState({
    content: "",
  });

  const { content } = commentData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`/comments/`, {
        ...commentData,
        owner: currentUser?.username,
        post: post?.id,
      });
      setCommentUpdated(true);
    } catch (error) {
      console.log(error);
    }
    setCommentData({
      content: "",
    });
  };

  const handleChange = (event) => {
    setCommentData({
      ...commentData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Row className={styles.CommentContainer}>
        <Form inline="inline" onSubmit={handleSubmit}>
          <Row>
            <Col md={2} lg={2} xl={2}></Col>
            <Col md={7} lg={7} xl={7} className="mx-auto">
              <Form.Group className="mb-3" controlId="content">
                <Form.Label className="d-none">content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="content"
                  placeholder="Comment..."
                  value={content}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={1} lg={1} xl={1}>
              <Button
                type="submit"
                variant="dark"
                className={appStyles.CommonButtonSecondary}
              >
                Comment
              </Button>
            </Col>
            <Col md={2} lg={2} xl={2}></Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default CommentForm;
