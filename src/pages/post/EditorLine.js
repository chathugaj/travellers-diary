import { Button, Col, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";
import { formatToReadableDate } from "../../helpers/commonHelper";
import { Avatar } from "../../components";
import { useNavigate } from "react-router-dom";

const EditorLine = ({ isOwner, post, currentUser }) => {

  const navigate = useNavigate();
  
    const handleEdit = async () => {
      navigate(`/editor/${post?.id}`)
    };
  
    return (
      <Row>
        <Col md={10} lg={8} className="mx-auto">
            <span className={styles.EditorLine}>
                {post ? (
                  <Avatar src={post?.profile_image}></Avatar>
                ) : (
                  ""
                )}{""}
                &nbsp;
                {post?.owner}{" "}
                &nbsp;
                {post ? formatToReadableDate(post?.created_at) : ""}
            </span>
            {post?.is_owner ? (<span>
                <Button
                type="submit"
                variant="dark"
                className={`${appStyles.CommonButtonSecondary} m-1`}
                onClick={handleEdit}
                >
                <i className="bi bi-pencil-square"></i>
                </Button>
            </span>):''}
        </Col>
      </Row>
    );
  };
  
  export default EditorLine;