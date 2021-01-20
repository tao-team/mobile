import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Space, Table, Typography } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone, SearchOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const filterProps = {
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={"Search..."}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: 50,
        }}
      >
        <Button type="primary" onClick={() => confirm()} icon={<SearchOutlined />} size="small">
          Search
        </Button>
        <Button onClick={() => clearFilters()} size="small">
          Reset
        </Button>
      </div>
    </div>
  ),
  filterIcon: filtered => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
};

const columns = [
  {
    title: "Name",
    key: "name",
    index: "name",
    // ok, render below takes parameters `text`, `record` and `index`, but maybe bug happend so `text` has
    // equal to `record` value
    render: (_, record) => <Text>{record.name}</Text>,
    onFilter: (val, record) => record.name.toLowerCase().includes(val.toLowerCase()),
    ...filterProps,
  },
  {
    title: "Surname",
    key: "surname",
    index: "surname",
    render: (_, record) => <Text>{record.surname}</Text>,
    onFilter: (val, record) => record.surname.toLowerCase().includes(val.toLowerCase()),
    ...filterProps,
  },
  {
    title: "Group",
    key: "group",
    index: "group",
    width: 150,
    render: (_, record) => <Text>{record.group}</Text>,
    onFilter: (val, record) => record.group.toLowerCase().includes(val.toLowerCase()),
    ...filterProps,
  },
  {
    title: "AvgMark",
    key: "avgMark",
    index: "avgMark",
    width: 150,
    render: (_, record) => <Text>{Number(record.avgMark).toFixed(2)}</Text>,
  },
  {
    title: "Graduated",
    key: "isGraduated",
    index: "isGraduated",
    align: "center",
    width: 120,
    render: (_, record) => (
      <div style={{ fontSize: 20 }}>
        {record.avgMark >= 2.8 ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <CloseCircleTwoTone twoToneColor="#f5222d" />
        )}
      </div>
    ),
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  const [datasource, setDatasource] = useState([
    {
      name: "1",
      surname: "Person",
      group: "5A",
      avgMark: 4.67,
    },
    {
      name: "2",
      surname: "Person",
      group: "5B",
      avgMark: 3.67,
    },
    {
      name: "Mega",
      surname: "Person",
      group: "5A",
      avgMark: 5.0,
    },
    {
      name: "So",
      surname: "Bad",
      group: "5B",
      avgMark: 2.71,
    },
    {
      name: "Super",
      surname: "Hero",
      group: "5C",
      avgMark: 4.0,
    },
    {
      name: "Amazing",
      surname: "Hero",
      group: "5C",
      avgMark: 4.01,
    },
    {
      name: "Mega",
      surname: "Failer",
      group: "5A",
      avgMark: 2.79,
    },
    {
      name: "Magical",
      surname: "Divide",
      group: "5B",
      avgMark: 2.8,
    },
  ]);

  const addNewRow = record => {
    setDatasource([...datasource, record]);
    setShowModal(false);
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
        <Title level={3}>22. Создать на React электронный журнал и фильтрацию по нему</Title>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "80%",
          // overflowY: "scroll",
          height: "calc(90% - 48px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "6px 0",
          }}
        >
          <Button onClick={() => setShowModal(true)} type="primary">
            Add a row
          </Button>
        </div>
        <Table columns={columns} dataSource={datasource} bordered scroll={{ y: 500 }} pagination={false}></Table>
      </div>
      <Modal title="Create a new student" footer={null} visible={showModal} closable={false}>
        <Form onFinish={addNewRow} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="surname" label="Surname" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="group" label="Group" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="avgMark" label="AvgMark" rules={[{ required: true }]}>
            <InputNumber defaultValue={0} min={2} max={5} precision={2} step={0.1} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space size="large">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
