import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from "../../styles/PostPage.module.css";
import React from "react";
import { addCsrfTokenHeaders } from "../../api/axiosDefaults";
import axios from "axios";
import { getCookie } from "../../helpers/commonHelper";
import { json } from "react-router-dom";

const LikePost = ({ isOwner, post, setLikeClicked, currentUser }) => {
  const token = getCookie("csrftoken");

  const handleUnlike = async () => {
    //   // const { status } = await axios({
    //   //   method: "delete",
    //   //   url: `/likes/${post?.like_id}`,
    //   //   headers: {
    //   //     "X-CSRF-TOKEN": token,
    //   //     "X-CSRFToken": token,
    //   //   },
    //   });
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/likes/${post?.like_id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //We set this false to indicate the user unliked the post
    setLikeClicked(!(response.status === 204));
  };

  const handleLike = async () => {
    // const { status } = await axios.post(`/likes/`, {
    //   post: post?.id,
    //   owner: currentUser?.username,
    // });
    // const { status } = await axios({
    //   method: "post",
    //   url: `/likes/`,
    //   headers: {
    //     "X-CSRF-TOKEN": token,
    //     "X-CSRFToken": token,
    //   },
    //   data: {
    //     post: post?.id,
    //     owner: currentUser?.username,
    //   },
    // });
    const response = await fetch(`${process.env.REACT_APP_API_URL}/likes/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRF-TOKEN": getCookie("csrftoken"),
        "X-CSRFToken": getCookie("csrftoken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: post?.id,
        owner: currentUser?.username,
      }),
    });

    setLikeClicked(response.status === 201);
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
