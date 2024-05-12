import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import styles from "../styles/SignIn.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                      Validation Text
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="mb-3">
                    <Button className={styles.SignInButton} variant="dark">
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
        <Row className={styles.SignInPageRow}>
          <Col md={6} xl={4} className="mb-3">
            <Button variant="outline-dark" className={styles.SignInSociaButton}>
              <i className="bi bi-facebook"></i>
            </Button>
          </Col>
          <Col md={6} xl={4} className="mb-3">
            <Button variant="outline-dark" className={styles.SignInSociaButton}>
              <i className="bi bi-google"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
