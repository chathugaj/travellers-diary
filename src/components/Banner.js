import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import styles from "../styles/Banner.module.css";
import appStyles from "../App.module.css";
import defaultBanner from "../assets/common_banner.jpeg"
import {Avatar} from "./index";
import {formatToReadableDate} from "../helpers/commonHelper";
import {useNavigate} from "react-router-dom";
import {useCurrentUser} from "../contexts/CurrentUserContext";

const Banner = ({banner, title, subTitle, authorProfileImage, authorName, authorUserName, dateTime, actionButton}) => {
    const navigate = useNavigate();
    const currentUser = useCurrentUser();
    const bgImage = banner ? banner : defaultBanner;
    const handleButtonClick = (event) => {
        currentUser ? navigate("/editor") : navigate("/signin");
    }

    return (
        <header className={`${styles.Banner}`} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={styles.OverLay}></div>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto position-relative">
                        <div className={styles.SiteHeading}>
                            <h1 className={styles.H1}>{title}</h1>
                            {
                                actionButton ? <Button className={appStyles.CommonButton} variant="dark" type="button" onClick={handleButtonClick}>
                                    <i className="bi bi-pencil-fill"></i> Write Article
                                </Button> : <></>
                            }
                            <h2 className={styles.H2}>{subTitle}</h2>
                            <span className={styles.Meta}>
                                {authorProfileImage ? <Avatar src={authorProfileImage}></Avatar> : ""} &nbsp;
                                {authorName || authorUserName ?
                                    <a href="#">{authorName ? authorName : authorUserName}</a> : ''} &nbsp;
                                {dateTime ? formatToReadableDate(dateTime) : ""}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Banner;
