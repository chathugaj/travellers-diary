import React from 'react';
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";
import axios from "axios";
import {Avatar} from "../../components";
import avatar from "../../components/Avatar";
import {Link} from "react-router-dom";

const CommentForm = ({currentUser, currentProfile, post, setCommentUpdated}) => {
    const [commentData, setCommentData] = React.useState({
        content: ""
    });

    const {content} = commentData

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`/comments/`, {
                ...commentData,
                owner: currentUser?.username,
                post: post?.id
            })
            setCommentUpdated(true)
        } catch (error) {
            console.log(error)
        }
        setCommentData({
            content: "",
        })
    }

    const handleChange = (event) => {
        setCommentData({
            ...commentData,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <Row className={styles.CommentContainer}>
            <Form inline="inline" onSubmit={handleSubmit}>
                <Row>
                    <Col md={3} lg={2} className="mx-auto"></Col>
                    <Col md={9} lg={7} className="mx-auto">
                        <Row>
                            <Col xs={1}>
                                <Avatar src={currentProfile?.image} alt="avatar" className="justify-content-end" />
                            </Col>
                            <Col xs={11}>
                                <Form.Group className="mb-3" controlId="content">
                                    <Form.Label className="d-none" >content</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="content" placeholder="Comment..." value={content}
                                                  onChange={handleChange}></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} lg={3} className="mx-auto">
                        <Button
                            type="submit"
                            variant="dark"
                            className={appStyles.CommonButtonSecondary}
                        >
                            Comment
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Row>
    );
}

export default CommentForm;