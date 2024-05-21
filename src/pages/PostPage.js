import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Banner} from "../components";
import {useParams} from "react-router-dom";
import {axiosReq} from "../api/axiosDefaults";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({results: []});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ]);
                setPost({results: [post]});
                console.log(post);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

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
                    <Col md={3}><i className="far fa-thumbs-up"></i></Col>
                </Row>
            </Container>
        </>
    )
};

export default PostPage;