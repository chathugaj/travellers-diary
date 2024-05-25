import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "../api/axiosDefaults";
import appStyles from "../App.module.css"
import styles from "../styles/ContentEditor.module.css"
import {useCurrentUser} from "../contexts/CurrentUserContext";
import {useNavigate} from "react-router-dom";

const ContentEditor = () => {
    const [editorData, setEditorData] = useState({
        title: "",
        sub_title: "",
        banner: "",
        body: "",
    });
    const [errors, setErrors] = useState({});
    const currentUser = useCurrentUser()
    const navigate = useNavigate()
    if (!currentUser) {
        navigate("/signin")
    }

    const { title, sub_title, banner, body } = editorData;

    const handleChange = (event) => {
        console.log(editorData)
        setEditorData({
            ...editorData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (title) {
            formData.append("title", title);
        }
        // if (sub_title) {
        //     formData.append("sub_title", sub_title);
        // }
        if (body) {
            formData.append("body", body);
        }
        // if (bannerInput?.files[0]) {
        //     formData.append("image", bannerInput?.files[0]);
        // }

        try {
            const {data} = await axios.post("/posts/", formData);
            console.log(data);
            setEditorData(data.user);
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
                            <Form.Control name="sub_title" type="text" placeholder="Sub Title" //value={sub_title}
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