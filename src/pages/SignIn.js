import React, {useState} from "react";
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
import {Link, useNavigate} from "react-router-dom";
import fetchDefaults from "../api/fetchDefaults";
import {useSetCurrentUser} from "../contexts/CurrentUserContext";


const SignIn = () => {
  const setCurrentUser = useSetCurrentUser()

  const [signInData, setSignInData] = React.useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({});

  const { username, password } = signInData;
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${fetchDefaults.baseUrl}/dj-rest-auth/login/`, {
        method: "POST",
        headers: fetchDefaults.headers,
        body: JSON.stringify(signInData),
      });

      const { status } = response;
      if (status === 400) {
        const jsonData = await response.json();
        setErrors(jsonData);
      }
      if (status === 200) {
        const jsonData = await response.json();
        sessionStorage.setItem("access", jsonData?.access);
        sessionStorage.setItem("refresh", jsonData?.refresh);
        setCurrentUser(jsonData?.user)
        navigate("/")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className={styles.SignInSection}>
      <Container>
        <Row className={styles.SignInHeader}>
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2 className={styles.SignInHeaderText}>SIGN IN</h2>
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
                <Form onSubmit={handleSubmit} >
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label className="d-none"  >username</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Username" value={username} onChange={handleChange} />
                  </Form.Group>
                  {errors.username?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                  ))}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-none" >password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                  </Form.Group>
                  {errors.password?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                  ))}
                  <div className="mb-3">
                    <Button className={styles.SignInButton} variant="dark" type="submit">
                      SIGN IN
                    </Button>
                  </div>
                  {errors.non_field_errors?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                  ))}
                  <Link to="/forgot_password">Forgot your password?</Link>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
