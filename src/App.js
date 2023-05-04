import { useState } from "react";
import Comment from "./components/comment";
import CommentLists from "./components/commentLists";

function App() {
  const [comments, setComments] = useState([]);
  return (
    <>
      <Comment setComments={setComments} />
      <CommentLists allcomments={comments} />
    </>
  );
}

export default App;
