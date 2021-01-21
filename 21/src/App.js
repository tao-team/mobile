import React from "react";
import { Typography } from "antd";
import Newsline from "./Newsline";

const { Title } = Typography;

const posts = [
  { title: "Kitten 1", description: "Here is the first random kitten." },
  { title: "Kitten 2", description: "Here is the second random kitten." },
  { title: "Kitten 3", description: "Here is the third random kitten." },
  { title: "Kitten 4", description: "Here is the fourth random kitten." },
];

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
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
          flexDirection: "column",
          justifyContent: "flex-start",
          minWidth: "40%",
          // overflowY: "scroll",
          height: "90%",
        }}
      >
        <Newsline postsContent={posts} />
      </div>
    </div>
  );
}

export default App;
