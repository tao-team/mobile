import React from "react";
import { List } from "antd";
import Item from "./Item";
import "./scroll.css";

const TodoList = ({ items }) => {
  console.log("current items are > ", items);
  return (
    <List
      size="large"
      bordered
      split
      dataSource={items}
      renderItem={item => <Item text={item} />}
      style={{
        width: "100%",
        overflowY: "scroll",
      }}
      className={"hidden-scroll"} // remove to show the scroll
    />
  );
};

export default TodoList;
