import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { SectionHeader } from "../components";
import SuccessToast from "../components/SuccessToast";

const ContactUs = () => {
  const [contactUsData, setContactUsData] = useState({
    reason: "",
    message: "",
  });
  const [showToast, setShowToast] = useState("");
  const [errors, setErrors] = useState({});
  const { reason, message } = contactUsData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/reports/", contactUsData);
      setContactUsData({
        reason: "",
        message: "",
      });
      setShowToast("Your message is sent successfully");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  const handleChange = (event) => {
    setContactUsData({
      ...contactUsData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container fluid className={appStyles.ContentContainer}>
      <SuccessToast
          show={showToast?.length > 0}
          message="Your message is sent successfully"
        ></SuccessToast>
      <Row>
      <Col>
        <SectionHeader title="Contact Us"></SectionHeader>
        <Form onSubmit={handleSubmit.bind(this)}>
          <Form.Group className="mb-3" controlId="reason">
            <Form.Label className="d-none">reason</Form.Label>
            <Form.Control
              type="reason"
              name="reason"
              placeholder="Reason"
              value={reason}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.reason?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group className="mb-3" controlId="message">
            <Form.Label className="d-none">message</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          {errors.message?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <div className="mb-3">
            <Button
              className={appStyles.CommonButton}
              variant="dark"
              type="submit"
            >
              Send
            </Button>
          </div>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form>
      </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
