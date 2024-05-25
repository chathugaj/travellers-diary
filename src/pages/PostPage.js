import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {Banner} from "../components";
import {useParams} from "react-router-dom";
import {useCurrentUser} from "../contexts/CurrentUserContext";
import axios from "../api/axiosDefaults";
import PostContent from "./post/PostContent";
import LikePost from "./post/LikePost";
import CommentForm from "./post/CommentForm";
import {useCurrentProfile} from "../contexts/ProfileContext";
import CommentList from "./post/CommentList";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({results: []});
    // const [comments, setComments] = useState({results: []});
    const [isOwner, setIsOwner] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [commentUpdated, setCommentUpdated] = useState(false);
    const currentUser = useCurrentUser();
    const currentProfile = useCurrentProfile();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axios.get(`/posts/${id}`),
                    // axios.get(`/comments/?post=${id}&page=1`),
                ]);
                setPost({results: [post]});
                // setComments(commentsData);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id, likeClicked, commentUpdated]);

    useEffect(() => {
        setIsOwner(currentUser?.username === post?.owner)
    }, [currentUser, post]);

    return (
        <>
            <Banner title={post?.results[0]?.title} subTitle={post?.results[0]?.sub_title}
                    banner={post?.results[0]?.banner} authorName={post?.results[0]?.owner}
                    authorProfileImage={post?.results[0]?.profile_image}
                    dateTime={post?.results[0]?.created_at}></Banner>
            <Container fluid>
                <PostContent post={post?.results[0]}/>
                <LikePost isOwner={isOwner} post={post?.results[0]} currentUser={currentUser}
                          setLikeClicked={setLikeClicked}/>
                <CommentForm post={post?.results[0]} currentUser={currentUser}
                             currentProfile={currentProfile} setCommentUpdated={setCommentUpdated} >
                </CommentForm>
                <CommentList currentUser={currentUser} post={post?.results[0]} />
            </Container>
        </>
    )
};

export default PostPage;