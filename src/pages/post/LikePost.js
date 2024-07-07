import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from "../../styles/PostPage.module.css";
import React from "react";
import axios, { axiosReq } from "../../api/axiosDefaults";

const LikePost = ({ isOwner, post, setLikeClicked, currentUser }) => {
  const handleUnlike = async () => {
    const { status } = await axiosReq.delete(`/likes/${post?.like_id}`);
    //We set this false to indicate the user unliked the post

    setLikeClicked(!(status === 204));
  };

  const handleLike = async () => {
    const { status } = await axiosReq.post(`/likes/`, {
      post: post?.id,
      owner: currentUser?.username,
    });
    setLikeClicked(status === 201);
  };

  return (
    <Row>
      <Col md={9}></Col>
      <Col md={3}>
        <span className={styles.Info}>
          {currentUser ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Post your thoughts using the comments form below
                </Tooltip>
              }
            >
              <i
                className={`bi bi-chat-left-dots ${styles.Default} ${styles.LikeCommon}`}
              ></i>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to post comments!</Tooltip>}
            >
              <i
                className={`bi bi-chat-left-dots ${styles.Default} ${styles.LikeCommon}`}
              ></i>
            </OverlayTrigger>
          )}
          &nbsp;
          <span className={styles.LikeCount}>({post?.comments_count})</span>
        </span>
        <span className={styles.Info}>
          {isOwner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="bi bi-hand-thumbs-up"></i>
            </OverlayTrigger>
          ) : post?.like_id ? (
            <span onClick={handleUnlike}>
              <i
                className={`bi bi-hand-thumbs-up-fill ${styles.Like} ${styles.LikeCommon}`}
              ></i>
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i
                className={`bi bi-hand-thumbs-up ${styles.LikeOutline} ${styles.LikeCommon}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i
                className={`bi bi-hand-thumbs-up ${styles.Default} ${styles.LikeCommon}`}
              ></i>
            </OverlayTrigger>
          )}
          <span className={styles.LikeCount}>({post?.likes_count})</span>
        </span>
      </Col>
    </Row>
  );
};

export default LikePost;
