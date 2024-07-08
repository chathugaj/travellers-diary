import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import appStyles from "../App.module.css";
import styles from "../styles/ContentEditor.module.css";
import SuccessToast from "../components/SuccessToast";
import { useNavigate, useParams } from "react-router-dom";

const ContentEditor = () => {
  const [editorData, setEditorData] = useState({
    title: "",
    sub_title: "",
    slug: "",
    banner: "",
    body: "",
  });
  const [bannerInput, setBannerInput] = useState(null);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState("");
  const {id} = useParams()
  const [post, setPost] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    setBannerInput(document.getElementById("bannerInput"));
  }, []);

  useEffect(() => {
    if (id) {
      const loadPost = async () => {
        const {data} = await axiosReq.get(`/posts/${id}`);
        setPost(data);
        setEditorData({
          title: data.title,
          sub_title: data.sub_title,
          body: data.body,
        });
      }
      loadPost();
    }
  }, [id])

  const handleChange = (event) => {
    setEditorData({
      ...editorData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileUpload = (event) => {
    bannerInput?.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (editorData.title) {
      formData.append("title", editorData.title);
      formData.append(
        "slug",
        editorData.title.replaceAll(" ", "_").toLowerCase()
      );
    }
    if (editorData.sub_title) {
      formData.append("sub_title", editorData.sub_title);
    }
    if (editorData.body) {
      formData.append("body", editorData.body);
    }
    if (bannerInput?.files[0]) {
      formData.append("banner", bannerInput?.files[0]);
    }

    try {
      if (post && id) {
        await axiosReq.put(`/posts/${id}/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setEditorData({
          title: "",
          sub_title: "",
          slug: "",
          banner: "",
          body: "",
        });
        navigate(`/posts/${id}`)
      } else {
        await axiosReq.post("/posts/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setEditorData({
          title: "",
          sub_title: "",
          slug: "",
          banner: "",
          body: "",
        });

      }
      setShowToast(
        `Your blog post saved successfully. Visit /posts to view the published article`
      );
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={styles.ContentEditor}>
      <SuccessToast
        display={showToast?.length > 0}
        message={showToast}
      ></SuccessToast>
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label className="d-none">title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Title"
                value={editorData.title}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            {errors.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group className="mb-3" controlId="sub_title">
              <Form.Label className="d-none">sub_title</Form.Label>
              <Form.Control
                name="sub_title"
                type="text"
                placeholder="Sub Title" 
                value={editorData.sub_title}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            {errors.sub_title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {post ? '': (
              <Form.Group className="mb-3" controlId="bannerInput">
              <Form.Label className="d-none">banner</Form.Label>
              <Form.Control
                name="banner"
                type="file"
                className="d-none"
                onChange={handleChange}
              ></Form.Control>
              <Button
                variant="dark"
                className={appStyles.CommonButton}
                onClick={handleFileUpload}
              >
                <i className="bi bi-upload"></i>&nbsp;&nbsp;Banner
              </Button>
              &nbsp;
              <Form.Text>{bannerInput?.files[0]?.name}</Form.Text>
            </Form.Group>
            )}
            {errors.banner?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group className="mb-3" controlId="body">
              <Form.Label className="d-none">body</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="body"
                placeholder="Content"
                value={editorData.body}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            {errors.body?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              variant="dark"
              type="submit"
              className={appStyles.CommonButton}
            >
              Publish
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentEditor;
