import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styles from "../styles/Banner.module.css";
import defaultBanner from "../assets/common_banner.jpeg"
import {Avatar} from "./index";
import {formatToReadableDate} from "../helpers/dateTimeHelper";

const Banner = ({banner, title, subTitle, authorProfileImage, authorName, authorUserName, dateTime}) => {
    const bgImage = banner ? banner : defaultBanner;
    return (
        <header className={`${styles.Banner}`} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={styles.OverLay}></div>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto position-relative">
                        <div className={styles.SiteHeading}>
                            <h1 className={styles.H1}>{title}</h1>
                            <h2 className={styles.H2}>{subTitle}</h2>
                            <span className={styles.Meta}>
                                <Avatar src={authorProfileImage}></Avatar>&nbsp;
                                <a href="#">{authorName ? authorName : authorUserName}</a>&nbsp;{formatToReadableDate(dateTime)}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Banner;
