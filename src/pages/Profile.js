import {useCurrentProfile} from "../contexts/ProfileContext";
import {Container, Row} from "react-bootstrap";
import {useCurrentUser} from "../contexts/CurrentUserContext";
import ProfileCard from "./profile/ProfileCard";
import ProfileMainContent from "./profile/ProfileMainContent";
import styles from "../styles/Profile.module.css";

const Profile = () => {
    const profile = useCurrentProfile();
    const currentUser = useCurrentUser();

    return (
        <Container fluid className={styles.ProfileContainer}>
            <Row className={styles.ProfileRowMargin}>
                <ProfileCard profile={profile} ></ProfileCard>
                <ProfileMainContent profile={profile} currentUser={currentUser}></ProfileMainContent>
            </Row>
        </Container>
    );
}

export default Profile;