import React from "react";
import styles from "../styles/PageFooter.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PageFooter = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto">
            <ul className={`${styles.ListInline} ${styles.TextCenter}`}>
              <li className="list-inline-item">
                <span className="fa-stack fa-lg">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our facebook page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-lg">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our twitter page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-lg">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit our instagram page(opens in a new tab)"
                    className={styles.SocialLink}
                  >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
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

export default PageFooter;
