import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Card, Form, Input, InputNumber, Modal, Select, Table, Tag } from "antd";

export const UpdateModal = ({ handleOk, handleCancel, modal, onDelete, onUpdate, fields, deleteId }) => {
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
  return (
    <Modal
      title="Basic Modal"
      visible={modal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          type="danger"
          key={"delete"}
          onClick={() => {
            onDelete(deleteId);
          }}
        >
          삭제
        </Button>,
        <Button key="back" onClick={handleCancel}>
          취소
        </Button>,
      ]}
    >
      <Form {...layout} fields={fields} name="addTransaction" onFinish={onUpdate} validateMessages={validateMessages}>
        <Form.Item name={"id"} hidden>
          <InputNumber disabled />
        </Form.Item>
        <Form.Item name={"title"} label="밭 이름" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={"introduction"} label="밭 정보" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label="밭 상세 정보" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            수정
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
