import {Button, Card, Col, Form, Image, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";
import appStyles from "../../App.module.css";
import styles from "../../styles/Profile.module.css"

const ProfileMainContent = ({profile, currentUser}) => {

    const [profileData, setProfileData] = useState({
        name: "",
        image: ""
    });

    const isOwner = currentUser?.username === profile?.owner

    const {name, image} = profileData;

    const handleSubmit = async (event) => {
    }
    const handleChange = (event) => {
    }

    return (
        <Col xs={12} md={6} sm={6} lg={8} >
            <Tabs defaultActiveKey="profile"
                  id="profile-tabs"
                  className="mb-3">
                <Tab eventKey="profile" title="Profile">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label className="d-none">image</Form.Label>
                            <Form.Control name="image" type="file" placeholder="" value={image}
                                          onChange={handleChange}></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className="d-none">title</Form.Label>
                            <Form.Control name="title" type="text"
                                          placeholder="Name" value={name}
                                          onChange={handleChange} readOnly={!isOwner}
                                          disabled={!isOwner}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="dark" type="submit" className={appStyles.CommonButton}>Update</Button>
                    </Form>
                </Tab>
            </Tabs>
        </Col>
    );
}

export default ProfileMainContent;