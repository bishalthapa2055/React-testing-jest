import React, { useState } from "react";

const Comment = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const addComments = () => {
  //   setComments((prev) => [...prev, { id: Date.now(), text: text }]);
  //   setText("");
  // };

  const postComments = async () => {
    const res = await fetch(" http://localhost:5000/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const result = await res.json();
    setComments((prev) => [...prev, result]);
    setText("");
  };
  return (
    <div>
      <h2>comment form</h2>
      <input
        placeholder="write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree terms and conditions</label>
      <button disabled={!checked || !text} onClick={postComments}>
        comment
      </button>
    </div>
  );
};

export default Comment;
