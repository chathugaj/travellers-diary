import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, Col, Row} from "react-bootstrap";
import {Avatar} from "../../components";
import {Link} from "react-router-dom";
import styles from "../../styles/PostPage.module.css";

const CommentList = ({ comments, currentUser }) => {
    console.log(comments)
    return (
        <ListGroup as="ol">
             {comments?.map((comment, index) => (
                <Row key={index}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <ListGroup.Item key={index}>
                            <Row>
                                {/*<Col md={1} sm={1} lg={1}>*/}
                                    <Link to={comment?.profile_id}>
                                        <Avatar src={comment?.profile_image} alt="avatar" />
                                    </Link>
                                {/*</Col>*/}
                                {/*<Col md={11} sm={11} lg={11}>*/}
                                {/*    <Row>*/}
                                {/*        <Col md={11}>*/}
                                            <div>{comment?.content}</div>
                                        {/*</Col>*/}
                                        {/*<Col>*/}
                                            {
                                                currentUser ?
                                                    (<>
                                                        <Button variant="outline-dark"><i className="bi bi-pencil-square"></i></Button>
                                                        <Button variant="outline-danger"><i className="bi bi-trash3"></i></Button>
                                                    </>) : <></>
                                            }
                                        {/*</Col>*/}
                                    {/*</Row>*/}
                                {/*</Col>*/}
                            </Row>
                        </ListGroup.Item>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            ))}
        </ListGroup>
    );
}

export default CommentList;