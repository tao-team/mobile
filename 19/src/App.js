import { Button, Divider, Input, Modal, Typography } from "antd";
import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todoItems, setTodoItems] = useState([
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
    "Feed the cat",
  ]);

  const newTodo = useRef("");
  const addNewTodo = () => {
    setTodoItems([...todoItems, newTodo.current.state.value]);
    setShowModal(false);

    // set ref value to default for new todo entering
    newTodo.current.state.value = "";
  };
  const closeModal = () => {
    setShowModal(false);
    // user may want to complete entering todo later so do not set ref to default value
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
        <Typography.Title level={3}>
          19. Создать страницу с реакт-компонентами — по типу Трелло или TodoList для учета задач
        </Typography.Title>
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              setShowModal(true);
              setTimeout(() => newTodo.current.focus(), 100);
            }}
            type="primary"
          >
            Add ToDo
          </Button>
          <Modal visible={showModal} closable={false} onCancel={closeModal} onOk={addNewTodo}>
            <Input type="text" placeholder="Feed the cat" ref={newTodo} onPressEnter={addNewTodo}></Input>
          </Modal>
        </div>
        <Divider type="horizontal" orientation="left">
          ToDo List
        </Divider>
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 200px)",
          }}
        >
          <TodoList items={todoItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
