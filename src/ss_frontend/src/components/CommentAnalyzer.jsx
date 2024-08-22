import React, { useState } from "react";

const CommentAnalyzer = () => {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Comment Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <button type="submit">Analyze Comment</button>
      </form>
      {result && (
        <div>
          <h3>Result:</h3>
          <p>Comment: {result.comment}</p>
          <p>Classification: {result.classification}</p>
        </div>
      )}
    </div>
  );
};

export default CommentAnalyzer;
