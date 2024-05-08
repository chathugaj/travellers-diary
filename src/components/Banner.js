import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <header className={`masterhead ${styles.Banner} ${styles.BannerImage}`}>
      <div class="overlay"></div>
      <Container>
        <Row>
          <div class="col-md-10 col-lg-8 mx-auto position-relative">
            <div class="site-heading">
              <h1>Record Your Memories</h1>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Banner;
