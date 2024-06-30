import React, { useEffect, useState } from "react";
import { Avatar } from "../../components";
import { Col, Container, Row, Button } from "react-bootstrap";
import styles from "../../styles/PostPage.module.css";
import appStyles from "../../App.module.css";
import CommentForm from "./CommentForm";

const CommentItem = ({
  currentUser,
  currentProfile,
  comment,
  post,
  handleDeleteComment,
  setCommentUpdated,
  updateCommentResult,
}) => {
  const [updated, setUpdated] = useState();

  const handleEditComment = (comment) => {
    setUpdated(comment);
  };

  return (
    <>
      {updated != undefined ? (
        <CommentForm
          post={post}
          currentUser={currentUser}
          currentProfile={currentProfile}
          setCommentUpdated={setCommentUpdated}
          setActionCompleted={setUpdated}
          comment={updated}
          updateCommentResult={updateCommentResult}
          buttonText="Save"
        ></CommentForm>
      ) : (
        <Container fluid>
          <Row className={styles.CommentContainer}>
            <Col md={10} lg={8} className="mx-auto">
              <Row>
                <Col md={2} lg={1}>
                  <Avatar src={comment?.profile_image} alt="avatar" />
                </Col>
                <Col md={9} lg={10}>
                  <h5>{comment?.owner}</h5>
                  <p>
                    <span>{comment?.content}</span>
                  </p>
                </Col>
                {currentUser && comment?.is_owner && (
                  <Col md={1} lg={1}>
                    <Button
                      type="submit"
                      variant="dark"
                      className={`${appStyles.CommonButtonSecondary} m-1`}
                      onClick={(event) => {
                        event.preventDefault();
                        handleEditComment(comment);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button
                      type="submit"
                      variant="danger"
                      className={`${appStyles.CommonButtonSecondary} m-1`}
                      value={comment?.id}
                      onClick={(event) => {
                        event.preventDefault();
                        handleDeleteComment(comment);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CommentItem;
