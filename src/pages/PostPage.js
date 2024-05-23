import React, {useEffect, useState} from 'react';
import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Banner} from "../components";
import {useParams} from "react-router-dom";
import {useCurrentUser} from "../contexts/CurrentUserContext";
import styles from "../styles/PostPage.module.css";
import axios, {axiosReq} from "../api/axiosDefaults";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({results: []});
    const [isOwner, setIsOwner] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const currentUser = useCurrentUser();

    console.log(likeClicked);
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axios.get(`/posts/${id}`),
                ]);
                console.log(post);
                setPost({results: [post]});
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id, likeClicked]);

    useEffect(() => {
        setIsOwner(currentUser?.username === post?.owner)
    }, [currentUser, post]);

    return (
        <>
            <Banner title={post?.results[0]?.title} subTitle={post?.results[0]?.sub_title}
                    banner={post?.results[0]?.banner} authorName={post?.results[0]?.owner}
                    authorProfileImage={post?.results[0]?.profile_image}
                    dateTime={post?.results[0]?.created_at}></Banner>
            <Container fluid>
                <Row>
                    <Col md={10} lg={8} className="mx-auto">
                        <p>{post?.results[0]?.body}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}>
                        {isOwner ? (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>You can't like your own post!</Tooltip>}
                            >
                                <i className="bi bi-hand-thumbs-up"></i>
                            </OverlayTrigger>
                        ) : post?.results[0]?.like_id ? (
                            <span onClick={async () => {
                                const { status } = await axios.delete(`/likes/${post?.results[0]?.like_id}`)
                                setLikeClicked(!(status === 204))
                            }}>
                                <i className={`bi bi-hand-thumbs-up-fill ${styles.Like} ${styles.LikeCommon}`}></i>
                            </span>
                        ) : currentUser ? (
                            <span onClick={async () => {
                                const { status } = await axios.post(`/likes/`, {
                                    post: post?.results[0]?.id,
                                    owner: currentUser?.username
                                })
                                setLikeClicked(status === 201)
                            }}>
                              <i className={`bi bi-hand-thumbs-up ${styles.LikeOutline} ${styles.LikeCommon}`}/>
                            </span>
                        ) : (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in to like posts!</Tooltip>}
                            >
                                <i className={`bi bi-hand-thumbs-up ${styles.Default} ${styles.LikeCommon}`}></i>
                            </OverlayTrigger>
                        )}
                        <span className={styles.LikeCount}>({post?.results[0]?.likes_count})</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default PostPage;