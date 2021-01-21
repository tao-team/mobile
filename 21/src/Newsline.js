import React from "react";
import Post from "./Post";
import "./scroll.css";

const Newsline = ({ postsContent }) => {
  return (
    <div
      className={"hidden-scroll"} // remove to show the scroll
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "2px 0 12px 0",
        flexWrap: "nowrap",
        overflowY: "scroll",
        border: "solid 1px #d9d9d9",
        borderRadius: 4,
      }}
    >
      {postsContent.map(content => (
        <Post title={content.title} description={content.description} />
      ))}
    </div>
  );
};

export default Newsline;
