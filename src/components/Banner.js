import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styles from "../styles/Banner.module.css";
import defaultBanner from "../assets/common_banner.jpeg"

const Banner = ({banner, title, subTitle}) => {
    const bgImage = banner ? banner : defaultBanner;
    return (
        <header className={`${styles.Banner}`} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={styles.OverLay}></div>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto position-relative">
                        <div className={styles.SiteHeading}>
                            <h1 className={styles.H1}>{title}</h1>
                            {subTitle ? <h2 className={styles.H2}>{subTitle}</h2> : <h2></h2>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Banner;
