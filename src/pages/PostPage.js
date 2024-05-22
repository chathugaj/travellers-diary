import React, {useEffect, useState} from 'react';
import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Banner} from "../components";
import {useParams} from "react-router-dom";
import {axiosReq} from "../api/axiosDefaults";
import {useCurrentUser} from "../contexts/CurrentUserContext";
import styles from "../styles/PostPage.module.css";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({results: []});
    const [isOwner, setIsOwner] = useState(false);
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ]);
                setPost({results: [post]});
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    useEffect(() => {
        setIsOwner(currentUser?.username === post?.owner)
    }, [currentUser, post]);

    console.log(isOwner)
    console.log(post?.results[0]?.like_id)

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
                            <span onClick={() => {
                            }}>
                                <i className={`bi bi-hand-thumbs-up-fill ${styles.Like}`}></i>
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => {}}>
                              <i className={`bi bi-hand-thumbs-up ${styles.LikeOutline}`}/>
                            </span>
                        ) : (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in to like posts!</Tooltip>}
                            >
                                <i className={`bi bi-hand-thumbs-up ${styles.Default}`}></i>
                            </OverlayTrigger>
                        )}
                        {post?.results[0]?.likes_count}
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default PostPage;