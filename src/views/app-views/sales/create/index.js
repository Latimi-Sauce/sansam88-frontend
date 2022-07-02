import React, { useState, useEffect } from "react";
import { Form, Button, message, Card, Input, Row, Select, DatePicker, Table } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CustomerModal from "../components/CustomerModal";
import { connect, createDispatchHook } from "react-redux";
import { createOrder, getCustomerList, getMemo, resetProject } from "redux/actions/Project";
import { useHistory } from "react-router-dom";
import moment from "moment";
const ProductCreate = (props) => {
  const { loading, customerList, getCustomerList, resetProject, createOrder, orderPk, getMemo, memos } = props;
  const [visible, setVisible] = useState();
  const [fields, setFields] = useState();
  const [customer, setCustomer] = useState();
  const history = useHistory();
  const onFinish = (data) => {
    createOrder(data);
  };
  const showModal = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (orderPk) {
      history.push({ pathname: "/app/sales/select", state: { orderPk } });
    }
  }, [orderPk]);

  const handleOk = (customer) => {
    if (customer) {
      setFields([
        {
          name: ["customer"],
          value: customer.id,
        },
        {
          name: ["customerName"],
          value: customer.name,
        },
        {
          name: ["receiver"],
          value: customer.name,
        },
        {
          name: ["address"],
          value: customer.address,
        },
      ]);
    }
    setCustomer(customer);
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleCustomer = () => {
    if (customer) {
      getMemo(customer.id);
    }
  };

  const column = [
    {
      title: "날짜",
      dataIndex: "created",
      render: (_, record) => <span>{moment(record.created).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "판매자 메모",
      dataIndex: "sellerMemo",
    },
    {
      title: "고객 메모",
      dataIndex: "customerMemo",
    },
  ];

  useEffect(() => {
    getCustomerList();
    return () => {
      resetProject();
    };
  }, []);

  return (
    <>
      <Card title={"주문 추가하기(고객)"}>
        <Form fields={fields} onFinish={onFinish}>
          <Form.Item name={"customer"} hidden>
            <Input></Input>
          </Form.Item>
          <Form.Item name={"created"} label={"날짜"} rules={[{ required: true, message: "날짜를 입력해주세요" }]}>
            <DatePicker />
          </Form.Item>
          <Row justify="space-between">
            <Form.Item
              name={"customerName"}
              label={"고객이름"}
              message={"hi"}
              rules={[{ required: true, message: "고객을 입력해주세요" }]}
            >
              <Input disabled></Input>
            </Form.Item>
            <Row>
              <Button type={"primary"} onClick={showModal}>
                고객 찾기
              </Button>
            </Row>
          </Row>
          <Form.Item
            name={"receiver"}
            label={"받는사람"}
            placeholder={"받는 사람 이름"}
            rules={[{ required: true, message: "받는사람을 입력해주세요" }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item name={"address"} label={"주소"} rules={[{ required: true, message: "주소를 입력해주세요" }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item name={"customerMemo"} initialValue={" "} label={"고객 메모"}>
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item name={"sellerMemo"} initialValue={" "} label={"판매자 메모"}>
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item name={"isDelivered"} initialValue={true} label={"배달 현황"}>
            <Select>
              <Select.Option value={true}>배달 완료</Select.Option>
              <Select.Option value={false}>배달 대기</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={"isPaid"} initialValue={true} label={"결제 현황"}>
            <Select>
              <Select.Option value={true}>결제 완료</Select.Option>
              <Select.Option value={false}>결제 대기</Select.Option>
            </Select>
          </Form.Item>
          <Row justify="end">
            <Button type="primary" htmlType="submit">
              다음
            </Button>
          </Row>
        </Form>
      </Card>
      <CustomerModal
        visible={visible}
        customerList={customerList}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        getCustomerList={getCustomerList}
      />
      <Card title={`${customer ? `${customer.name}님의 메모` : "고객 메모 (고객을 선택해주세요)"}`}>
        <Row justify="end">
          <Button onClick={handleCustomer}>메모 보기</Button>
        </Row>
        <Table columns={column} dataSource={memos ? memos : ""} rowKey={"id"} />
      </Card>
    </>
  );
};

const mapStateToProps = ({ project }) => {
  const { loading, customerList, orderPk, memos } = project;
  return { loading, customerList, orderPk, memos };
};

const mapDispatchToProps = {
  getCustomerList,
  resetProject,
  createOrder,
  getMemo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
