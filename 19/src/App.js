import { Button, Divider, Input, Modal } from "antd";
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
  ]);
  const newTodo = useRef("");
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
          <Button onClick={() => setShowModal(true)} type="primary">
            Add ToDo
          </Button>
          <Modal
            visible={showModal}
            closable={false}
            onCancel={() => setShowModal(false)}
            onOk={() => {
              const newTodoItems = todoItems.slice();
              newTodoItems.push(newTodo.current.state.value);
              setTodoItems(newTodoItems);
              setShowModal(false);
              console.log("onOk > ", todoItems);
            }}
          >
            <Input type="text" placeholder="Feed the cat" ref={newTodo}></Input>
          </Modal>
        </div>
        <Divider type="horizontal" orientation="left">
          ToDo List
        </Divider>
        <div
          style={{
            display: "flex",
            // flex: "1 1 auto",
            height: "calc(100vh - 48px - 32px - 50px)",
            overflowY: "scroll",
          }}
        >
          <TodoList items={todoItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
