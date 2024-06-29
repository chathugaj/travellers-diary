import { Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData, removeItem } from "../../utils/utils";
import {
  fetchComments,
  useCommentResult,
  useSetCommentResult,
} from "../../contexts/CommentsContext";
import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ currentUser, post }) => {
  const commentResult = useCommentResult();
  const setCommentResult = useSetCommentResult();
  const [deleted, setDeleted] = useState();

  useEffect(() => {
    if (post) {
      (async () => {
        const response = await fetchComments(post);
        setCommentResult(response);
      })();
    }
  }, [post]);

  useEffect(() => {
    if (deleted) {
      const handleDelete = async () => {
        const newResult = await removeItem(
          deleted,
          commentResult,
          setCommentResult
        );
        const response = await fetchComments(post);
        setCommentResult(response);
      };
      handleDelete();
    }
  }, [deleted]);

  return (
    <Row id="scrollableList">
      {post && commentResult && commentResult?.results && (
        <InfiniteScroll
          dataLength={commentResult?.results?.length}
          next={() => fetchMoreData(commentResult, setCommentResult)}
          hasMore={!!commentResult.next}
          loader={<h4>Loading...</h4>}
          children={commentResult?.results?.map((comment) => (
            <CommentItem
              key={comment?.id}
              comment={comment}
              currentUser={currentUser}
              handleDeleteComment={setDeleted}
            ></CommentItem>
          ))}
        ></InfiniteScroll>
      )}
    </Row>
  );
};

export default CommentList;
