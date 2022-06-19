import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Image, Input, InputNumber, Modal, Row, Select, Table, Tag } from "antd";
import { SearchOutlined, FileExcelOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Flex from "components/shared-components/Flex";
import NumberFormat from "react-number-format";
import moment from "moment";
import Utils from "utils";
import Title from "antd/lib/skeleton/Title";

const getPaymentStatus = (status) => {
  if (status === true) {
    return "success";
  }
  if (status === false) {
    return "warning";
  }
  return "";
};

const getShippingStatus = (status) => {
  if (status === true) {
    return "blue";
  }
  if (status === false) {
    return "cyan";
  }
  return "";
};

export const orderTableColumns = [
  {
    title: "주문번호",
    dataIndex: "id",
  },
  {
    title: "고객",
    dataIndex: "customerName",
    render: (_, record) => (
      <Flex>
        <AvatarStatus size={30} name={record.customerName} />
      </Flex>
    ),
  },
  {
    title: "받는 사람",
    dataIndex: "receiver",
    render: (_, record) => (
      <Flex>
        <AvatarStatus size={30} name={record.receiver} />
      </Flex>
    ),
  },
  {
    title: "날짜",
    dataIndex: "created",
    render: (_, record) => <span>{moment(record.created).format("YYYY-MM-DD")}</span>,
  },
  {
    title: "주문 현황",
    dataIndex: "orderStatus",
    render: (_, record) => (
      <>
        <Tag color={getShippingStatus(record.isDelivered)}>{record.isDelivered ? "배송 완료" : "배송 대기"}</Tag>
      </>
    ),
  },
  {
    title: "결제 현황",
    dataIndex: "paymentStatus",
    render: (_, record) => (
      <>
        <Badge status={getPaymentStatus(record.isPaid)} />
        <span>{record.isPaid ? "결제 완료" : "결제 대기"}</span>
      </>
    ),
  },
  {
    title: "총 가격",
    dataIndex: "price",
    render: (_, record) => (
      <span className="font-weight-semibold">
        <NumberFormat displayType={"text"} value={record.price} prefix={"₩"} thousandSeparator={true} />
      </span>
    ),
  },
];

export const RecentOrder = ({ recentOrderData, getOrderList, showDetailModal }) => {
  const [list, setList] = useState(recentOrderData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const paymentStatusList = [
    {
      name: "결제 완료",
      value: true,
    },
    { name: "결제 대기", value: false },
  ];
  const rowSelection = {
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
  };
  const onSearch = (e) => {
    const value = e.currentTarget.value;
    getOrderList(value);
    setSelectedRowKeys([]);
  };

  const handleShowStatus = (value) => {
    if (value !== "All") {
      const key = "isPaid";
      const data = Utils.filterArray(recentOrderData, key, value);
      setList(data);
    } else {
      setList(recentOrderData);
    }
  };
  return (
    <Card title="주문내역">
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
            <Input placeholder="Search" prefix={<SearchOutlined />} onPressEnter={(e) => onSearch(e)} />
          </div>
          <div className="mb-3">
            <Select
              defaultValue="All"
              className="w-100"
              style={{ minWidth: 180 }}
              onChange={handleShowStatus}
              placeholder="Status"
            >
              <Select.Option value="All">전체 </Select.Option>
              {paymentStatusList.map((elm) => (
                <Select.Option key={elm.value} value={elm.value}>
                  {elm.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Flex>
        <div>
          <Button
            type="primary"
            icon={<FileExcelOutlined />}
            onClick={() => {
              console.log(selectedRows);
            }}
            block
          >
            프린트
          </Button>
        </div>
      </Flex>
      <Table
        pagination={true}
        columns={orderTableColumns}
        dataSource={list ? list : recentOrderData}
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          type: "checkbox",
          preserveSelectedRowKeys: false,
          ...rowSelection,
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              showDetailModal(record);
            },
          };
        }}
        rowKey="id"
      />
    </Card>
  );
};

export const DetailModal = ({ handleOk, handleCancel, modal, onDelete, onUpdate, detail, onCreate, setDetail }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "입력이 필요합니다.",
    types: {
      number: "숫자를 입력해 주세요",
    },
  };
  useEffect(() => {
    return () => {
      detail = "null";
      setDetail(undefined);
    };
  }, []);
  return (
    <Modal
      title="Basic Modal"
      visible={modal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key={"update"} type="primary" htmlType="submit">
          수정
        </Button>,
        <Button
          type="danger"
          key={"delete"}
          onClick={() => {
            onDelete(detail.id);
          }}
        >
          삭제
        </Button>,
        <Button key="back" onClick={handleCancel}>
          취소
        </Button>,
      ]}
    >
      <Row justify="center" className="mb-20">
        <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Row>
      <Form
        {...layout}
        name="addTransaction"
        onFinish={detail ? onUpdate : onCreate}
        validateMessages={validateMessages}
        style={{ marginTop: "10px" }}
      >
        <Form.Item name={"id"} initialValue={detail ? detail.id : null} style={{ display: "none" }}>
          <InputNumber disabled />
        </Form.Item>
        <Form.Item
          justify={"center"}
          name={"isPaid"}
          initialValue={detail ? detail.isPaid : ""}
          style={{ marginLeft: "-30%" }}
          label="결제"
        >
          <Select>
            <Select.Option value={true} style={{ color: "green" }}>
              결제 완료
            </Select.Option>
            <Select.Option value={false}>결제 대기 </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={"isDelivered"}
          initialValue={detail ? detail.isDelivered : ""}
          style={{ marginLeft: "-30%" }}
          label="배달"
        >
          <Select>
            <Select.Option value={true} style={{ color: "green" }}>
              배달 완료
            </Select.Option>
            <Select.Option value={false}>배달 대기 </Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <Row>
            <span>판매자</span>
            <div>{detail ? detail.sellerMemo : ""}</div>
          </Row>
        </Card>
        <Card>
          <Row>
            <span>고객</span>
            <div>{detail ? detail.customerMemo : ""}</div>
          </Row>
        </Card>
        <Table />
      </Form>
    </Modal>
  );
};
