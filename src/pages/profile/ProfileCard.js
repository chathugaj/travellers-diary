import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import styles from "../../styles/Profile.module.css";
import {Link} from "react-router-dom";

const ProfileCard = ({profile}) => {

    return (
        <Col xs={12} md={6} sm={6} lg={4} >
            <Card className={styles.ProfileCard}>
                <ListGroup className="text-center" variant="flush">
                    <ListGroup.Item>
                        <Image src={profile?.image} thumbnail fluid></Image>
                        <p className={`${styles.ProfileText} ${styles.ProfileUpperCase}`}>{profile?.owner}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Link className={`${styles.MetaLink} ${styles.ProfileText}`} to={`/posts/?search=${profile?.owner}`}>
                                <Col>
                                    {profile?.post_count}
                                </Col>
                            </Link>
                        </Row>
                        <Row>
                            <Col className={`${styles.ProfileText} ${styles.ProfileUpperCase}`}>Posts</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
}

export default ProfileCard;