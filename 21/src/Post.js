import React from "react";
import { Card, Image } from "antd";
import Like from "./Like";

const { Meta } = Card;

/**
 * getRandomInt returns a random integer number.
 * @param {number} base integer; base of the number (if 3 is given then the result will be 0, 1 or 2)
 */
const getRandomInt = base => {
  return Math.floor(Math.random() * Math.floor(base));
};

const Post = ({ title, description }) => {
  const width = (2 + getRandomInt(3)) * 100;
  const height = (2 + getRandomInt(3)) * 100;

  let imgURL = `https://placekitten.com/${width}/${height}`;
  const isBlackWhite = getRandomInt(2) === 1;
  if (isBlackWhite) {
    imgURL = `https://placekitten.com/g/${width}/${height}`;
  }
  const image = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // to center the Image on the Card
      }}
    >
      <Image width={width} height={height} placeholder={true} src={imgURL} />
    </div>
  );

  const actionButtons = [
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        padding: "0 12px",
      }}
    >
      <Like context={{ postTitle: title }} />
    </div>,
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 4,
      }}
    >
      <Card hoverable bordered cover={image} actions={actionButtons}>
        <Meta title={title} description={description} />
        {isBlackWhite ? <Meta description="It is a black-white picture!" /> : ""}
      </Card>
    </div>
  );
};

export default Post;
