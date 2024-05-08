import React from "react";
import styles from "../styles/Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto">
            <ul className={`${styles.ListInline} ${styles.TextCenter}`}>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our facebook page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our twitter page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our instagram page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
            </ul>
            <p className={styles.Copyright}>
              Copyright&nbsp;©&nbsp;TRAVELER'S DIARY 2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
