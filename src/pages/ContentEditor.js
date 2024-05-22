import {Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import appStyles from "../App.module.css"
import styles from "../styles/ContentEditor.module.css"

const ContentEditor = () => {
    const [editorData, setEditorData] = useState({
        title: "",
        sub_title: "",
        banner: "",
        body: "",
    });

    const { title, sub_title, banner, body } = editorData

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setEditorData({
            ...editorData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/posts/", editorData);
            console.log(data);                                                                                                                                                                                                               setEditorData(data.user);
        } catch (err) {
            setErrors(err.response?.data);
        }
    }

    return (
        <Container className={styles.ContentEditor}>
            <Row>
                <Col md={10} lg={8} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className="d-none">title</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Title" value={title}
                                           onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sub_title">
                            <Form.Label className="d-none">sub_title</Form.Label>
                            <Form.Control name="sub_title" type="text" placeholder="Sub Title" value={sub_title}
                                           onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="banner">
                            <Form.Label className="d-none">banner</Form.Label>
                            <Form.Control name="banner" type="file" placeholder="Banner" value={banner}
                                           onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="body">
                            <Form.Label className="d-none">body</Form.Label>
                            <Form.Control as="textarea" rows={10} name="body" placeholder="Images" value={body}
                                          onChange={handleChange}></Form.Control>
                        </Form.Group>
                        {/*<ButtonGroup aria-label="Basic example">*/}
                            <Button variant="danger" type="submit" className={appStyles.CommonButton}>Delete</Button>
                            <Button variant="dark" type="submit" className={appStyles.CommonButton}>Publish</Button>
                        {/*</ButtonGroup>*/}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentEditor;