import { createContext, useContext, useState } from "react";
import axios from "../api/axiosDefaults";

export const CommentResultsContext = createContext();
export const SetCommentResultsContext = createContext();

export const useCommentResult = () => useContext(CommentResultsContext);
export const useSetCommentResult = () => useContext(SetCommentResultsContext);

export const fetchComments = async (post) => {
  const url = `comments/?page=1&post=${post?.id}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const CommentsProvider = ({ children }) => {
  const [commentResult, setCommentResult] = useState([]);

  return (
    <CommentResultsContext.Provider value={commentResult}>
      <SetCommentResultsContext.Provider value={setCommentResult}>
        {children}
      </SetCommentResultsContext.Provider>
    </CommentResultsContext.Provider>
  );
};
