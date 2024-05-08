import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <header className={`${styles.Banner} ${styles.BannerImage}`}>
      <div className={styles.OverLay}></div>
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto position-relative">
            <div className={styles.SiteHeading}>
              <h1>Record Your Memories</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Banner;
