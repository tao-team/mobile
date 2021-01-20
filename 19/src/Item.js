import React, { useState } from "react";
import { Button, List, Typography } from "antd";

const { Text } = Typography;

const Item = ({ text }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <List.Item
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <Typography
        style={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Text disabled={completed}>{text}</Text>
      </Typography>
      <div
        style={{
          justifySelf: "right",
        }}
      >
        {completed ? (
          <Button type="ghost" danger onClick={() => setCompleted(false)}>
            Todo
          </Button>
        ) : (
          <Button type="primary" onClick={() => setCompleted(true)}>
            Complete
          </Button>
        )}
      </div>
    </List.Item>
  );
};

export default Item;
