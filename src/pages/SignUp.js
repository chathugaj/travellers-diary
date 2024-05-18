import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import styles from "../styles/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const { username, password1, password2 } = signUpData;
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      navigate("/signin");
    } catch (err) {
      console.log(">>>>>>>>>>", err);
      setErrors(err.response?.data);
    }
  };

  return (
    <section className={styles.SignInSection}>
      <Container>
        <Row className={styles.SignInHeader}>
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2 className={styles.SignInHeaderText}>SIGN UP</h2>
          </Col>
        </Row>
        <Row className={styles.SignInPageRow}>
          <Col md={6} xl={4}>
            <Card className="mb-5">
              <CardBody className={styles.SignInForm}>
                <div
                  className={`${styles.Icon} ${styles.IconDark} ${styles.IconXL} ${styles.IconMargin}`}
                >
                  <i className="bi bi-person"></i>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label className="d-none">username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.username?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <Form.Group className="mb-3" controlId="password1">
                    <Form.Label className="d-none">password1</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password1"
                      value={password1}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password2">
                    <Form.Label className="d-none">password2</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="password2"
                      value={password2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <Button
                      className={styles.SignInButton}
                      variant="dark"
                      type="submit"
                    >
                      SIGN UP
                    </Button>
                  </div>
                  <span>
                    Aready have an account? <Link to="/">SIGN IN</Link>
                  </span>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
