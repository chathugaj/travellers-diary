import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Banner } from "../components";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import PostContent from "./post/PostContent";
import LikePost from "./post/LikePost";
import CommentForm from "./post/CommentForm";
import EditorLine from "./post/EditorLine";
import { useCurrentProfile } from "../contexts/ProfileContext";
import CommentList from "./post/CommentList";
import { CommentsProvider } from "../contexts/CommentsContext";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [isOwner, setIsOwner] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [commentUpdated, setCommentUpdated] = useState(false);
  const currentUser = useCurrentUser();
  const currentProfile = useCurrentProfile();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id, likeClicked, commentUpdated]);

  useEffect(() => {
    setIsOwner(post.is_owner);
  }, [currentUser, post]);

  return (
    <>
      <Banner
        title={post?.results[0]?.title}
        subTitle={post?.results[0]?.sub_title}
        banner={post?.results[0]?.banner}
        authorName={post?.results[0]?.owner}
        authorProfileImage={post?.results[0]?.profile_image}
        dateTime={post?.results[0]?.created_at}
      ></Banner>
      <Container fluid>
        <EditorLine post={post?.results[0]} isOwner={isOwner} currentUser={currentUser}></EditorLine>
        <PostContent post={post?.results[0]} />
        <LikePost
          isOwner={isOwner}
          post={post?.results[0]}
          currentUser={currentUser}
          setLikeClicked={setLikeClicked}
        />
        {currentUser ? (
          <CommentForm
            post={post?.results[0]}
            currentUser={currentUser}
            currentProfile={currentProfile}
            setCommentUpdated={setCommentUpdated}
            buttonText="Comment"
          ></CommentForm>
        ) : (
          <Row></Row>
        )}
        <CommentsProvider>
          <CommentList
            currentUser={currentUser}
            currentProfile={currentProfile}
            setCommentUpdated={setCommentUpdated}
            post={post?.results[0]}
          />
        </CommentsProvider>
      </Container>
    </>
  );
};

export default PostPage;
