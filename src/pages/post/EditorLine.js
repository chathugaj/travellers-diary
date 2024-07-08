import { Button, Col, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostPage.module.css";
import { formatToReadableDate } from "../../helpers/commonHelper";
import { Avatar } from "../../components";

const EditorLine = ({ isOwner, post, currentUser }) => {
    const handleUnlike = async () => {
      const { status } = await axiosReq.delete(`/likes/${post?.like_id}`);
      //We set this false to indicate the user unliked the post
  
      setLikeClicked(!(status === 204));
    };
  
    const handleLike = async () => {
      const { status } = await axiosReq.post(`/likes/`, {
        post: post?.id,
        owner: currentUser?.username,
      });
      setLikeClicked(status === 201);
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
                onClick={(event) => {
                    event.preventDefault();
                    // handleEditComment(comment);
                }}
                >
                <i className="bi bi-pencil-square"></i>
                </Button>
            </span>):''}
        </Col>
      </Row>
    );
  };
  
  export default EditorLine;