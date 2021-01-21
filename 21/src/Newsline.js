import React from "react";
import Post from "./Post";
import "./Newsline.css";

const Newsline = ({ postsContent }) => {
  return (
    <div
      className="newsline" // Chrome
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
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        // boxShadow: "inset 0px 0px 10px 20px orange",
      }}
    >
      {postsContent.map(content => (
        <Post title={content.title} description={content.description} />
      ))}
    </div>
  );
};

export default Newsline;
