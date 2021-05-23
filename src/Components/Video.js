import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Video = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentSection, setCommentSection] = useState([]);
  const { id } = useParams();

  const _onReady = (e) => {
    e.target.pauseVideo();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentSection((prevCommentSection) => [
      ...prevCommentSection,
      `${name}:${comment}`,
    ]);
    setName("");
    setComment("");
    debugger;
  };

  const handleName = (e) => {
    return setName(e.target.value);
  };

  const handleComment = (e) => {
    return setComment(e.target.value);
  };

  const opts = {
    height: "400",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section>
      <YouTube
        className="section"
        videoId={id}
        onReady={_onReady}
        opts={opts}
      />

      <form onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            type="text"
            placeholder="Name..."
            onChange={handleName}
            name="name"
            value={name}
          />
        </label>

        <label>
          Comment
          <input
            type="text"
            placeholder="Comment..."
            onChange={handleComment}
            id="comment"
            value={comment}
          />
        </label>

        <button className="button" type="submit">
          Submit
        </button>
      </form>

      <ul>
        {commentSection.map((comment) => {
          return <li className="comment">{comment}</li>;
        })}
      </ul>
    </section>
  );
};

export default Video;