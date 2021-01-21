import React, { useState } from "react";
import { Button, Tooltip, notification, Badge } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const Like = ({ context }) => {
  const [likeTimes, setLikeTimes] = useState(0);

  const showNotification = () => {
    notification.info({
      key: `${context.postTitle}${context.key}`,
      duration: 2,
      message: "You liked the post",
      description: `The post "${context.postTitle}" now has ${likeTimes + 1} likes`,
    });
  };

  return (
    <Tooltip placement="right" title="Like the post">
      <Badge count={likeTimes}>
        <Button
          shape="circle"
          onClick={() => {
            setLikeTimes(likeTimes + 1);
            showNotification();
          }}
          size="large"
          icon={<HeartTwoTone twoToneColor="#eb2f96" />}
        />
      </Badge>
    </Tooltip>
  );
};

export default Like;
