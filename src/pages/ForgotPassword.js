import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../styles/SignIn.module.css";

function ForgotPassword() {
  return (
    <section className={styles.SignInSection}>
      <Container>
        <Row className={styles.SignInHeader}>
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2 className={styles.SignInHeaderText}>FORGOT PASSWORD?</h2>
          </Col>
        </Row>
        <Row className={styles.SignInHeader}>
          <Col md={8} xl={6} className="text-center mx-auto">
            <p>
              It happens to all of us. Let us know your email address and we
              will send you a link to reset your password if you have an
              account.
            </p>
          </Col>
        </Row>
        <Row className={styles.SignInHeader}>
          <Form>
            <Col md={6} xl={4} className="text-center mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">Validation Text</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6} xl={4} className="text-center mx-auto">
              <Button className={styles.SignInButton} variant="dark">
                SEND LINK
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default ForgotPassword;
