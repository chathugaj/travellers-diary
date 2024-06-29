import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { Avatar } from "../../components";
import {
  fetchComments,
  useCommentResult,
  useSetCommentResult,
} from "../../contexts/CommentsContext";
import { useEffect } from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ currentUser, post }) => {
  const commentResult = useCommentResult();
  const setCommentResult = useSetCommentResult();

  useEffect(() => {
    (async () => {
      const response = await fetchComments(post);
      setCommentResult(response);
    })();
  }, [post]);

  console.log(commentResult?.results);

  return (
    <Row id="scrollableList">
      {post && commentResult && commentResult?.results && (
        <InfiniteScroll
          dataLength={commentResult?.results?.length}
          next={() => fetchMoreData(commentResult, setCommentResult)}
          hasMore={!!commentResult.next}
          loader={<h4>Loading...</h4>}
          children={commentResult?.results?.map((comment, index) => (
            <CommentItem comment={comment}></CommentItem>
          ))}
        ></InfiniteScroll>
      )}
    </Row>
  );
};

export default CommentList;
