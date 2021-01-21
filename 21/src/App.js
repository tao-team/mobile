import React, { useState } from "react";
import { Button, Typography, notification, Tooltip } from "antd";
import Newsline from "./Newsline";

const { Title } = Typography;

function App() {
  const [posts, setPosts] = useState([
    { key: 1, title: "Kitten 1", description: "Here is the first random kitten." },
    { key: 2, title: "Kitten 2", description: "Here is the second random kitten." },
    { key: 3, title: "Kitten 3", description: "Here is the third random kitten." },
    { key: 4, title: "Kitten 4", description: "Here is the fourth random kitten." },
  ]);

  const [nextNum, setNextNum] = useState(5);

  const addNewPost = () => {
    setNextNum(nextNum + 1);
    setPosts([...posts, { key: nextNum, title: `Kitten ${nextNum}`, description: "And another kitten" }]);
    notification["success"]({
      key: "new_post",
      duration: 3,
      message: "New kitten was added",
      description: `"Kitten ${nextNum}" was added`,
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Title level={3}>
          21. Создать на React типовую страницу для нового поста с картинкой в социальных сетях, реализовать подсчет
          лайков
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "flex-end",
          padding: "6px 0",
        }}
      >
        <Tooltip
          title="Each time the state of app is changed new request to get random kitten is made so pictures can chage while adding new posts."
          placement="right"
        >
          <Button onClick={addNewPost} type="primary">
            Add new post
          </Button>
        </Tooltip>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minWidth: "40%",
          // flex: "1 1 auto",
          // overflowY: "scroll",
          height: "85%",
        }}
      >
        <Newsline postsContent={posts} />
      </div>
    </div>
  );
}

export default App;
