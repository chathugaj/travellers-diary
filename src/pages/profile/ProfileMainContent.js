import { Alert, Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import styles from "../../styles/Profile.module.css";
import axios from "../../api/axiosDefaults";
import { useSetCurrentProfile } from "../../contexts/ProfileContext";
import SuccessToast from "../../components/SuccessToast";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

const ProfileMainContent = ({ profile, currentUser }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    image: "",
  });
  const setCurrentProfile = useSetCurrentProfile();
  const [imageInput, setImageInput] = useState(null);
  const [errors, setErrors] = useState({});
  const [displayToast, setDisplayToast] = useState(false);

  useEffect(() => {
    setImageInput(document.getElementById("imageInput"));
  }, []);

  const isOwner = currentUser?.username === profile?.owner;
  const { name, image } = profileData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (name) {
      formData.append("name", name);
    }
    if (imageInput?.files[0]) {
      formData.append("image", imageInput?.files[0]);
    }

    try {
      const { data } = await axios.put(`profiles/${profile?.id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setCurrentProfile(data);
      setDisplayToast(true);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileUpload = (event) => {
    imageInput?.click();
  };

  const [reports, setReports] = useState();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: reports } = await axios.get(`/reports/`);
        setReports(reports);
      } catch (err) {
        console.log(err);
      }
    };

    if (currentUser?.is_superuser) {
      handleMount();
    }
  }, [currentUser]);

  return (
    <Col xs={12} md={6} sm={6} lg={8}>
      <SuccessToast
        message="Profile update successful"
        display={displayToast}
      ></SuccessToast>
      <Tabs defaultActiveKey="profile" id="profile-tabs" className="mb-3">
        <Tab eventKey="profile" title="Profile">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="imageInput">
              <Form.Label className="d-none">image</Form.Label>
              <Form.Control
                name="image"
                type="file"
                className="d-none"
                onChange={handleChange}
              ></Form.Control>
              <Button
                variant="dark"
                className={appStyles.CommonButton}
                onClick={handleFileUpload}
              >
                <i className="bi bi-upload"></i>&nbsp;&nbsp;Profile Picture
              </Button>
              &nbsp;
              <Form.Text>{imageInput?.files[0]?.name}</Form.Text>
            </Form.Group>
            {errors.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="d-none">name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Name"
                value={name ? name : profile?.name}
                onChange={handleChange}
                readOnly={!isOwner}
                disabled={!isOwner}
              ></Form.Control>
            </Form.Group>
            {errors.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              variant="dark"
              type="submit"
              className={appStyles.CommonButton}
            >
              Update
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form>
        </Tab>
        {currentUser?.is_superuser && (
          <Tab eventKey="messages" title="Messages">
            {reports && reports.results && (
              <InfiniteScroll
                dataLength={reports.results.length}
                next={() => fetchMoreData(reports, setReports)}
                hasMore={!!reports.next}
                loader={<h4>Loading...</h4>}
                children={reports?.results?.map((report, index) => (
                  <div
                    className={styles.ReportItem}
                    key={index}
                    // onClick={() => console.log(report)}
                  >
                    <div>
                      <span className={styles.ReortReason}>
                        {report?.reason}
                      </span>
                    </div>
                    <div>
                      <span className={styles.ReportResultAnnotations}>
                        {report?.owner}
                      </span>
                      <span className={styles.ReportResultAnnotations}>
                        {report?.created_at?.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                ))}
              ></InfiniteScroll>
            )}
          </Tab>
        )}
      </Tabs>
    </Col>
  );
};

export default ProfileMainContent;
