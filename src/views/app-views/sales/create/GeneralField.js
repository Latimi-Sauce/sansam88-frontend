import React from "react";
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Select, Button, Table } from "antd";
import { ImageSvg } from "assets/svg/icon";
import CustomIcon from "components/util-components/CustomIcon";
import { LoadingOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const { Dragger } = Upload;
const { Option } = Select;

const rules = {
  name: [
    {
      required: true,
      message: "Please enter product name",
    },
  ],
  description: [
    {
      required: true,
      message: "Please enter product description",
    },
  ],
  price: [
    {
      required: true,
      message: "Please enter product price",
    },
  ],
  comparePrice: [],
  taxRate: [
    {
      required: true,
      message: "Please enter tax rate",
    },
  ],
  cost: [
    {
      required: true,
      message: "Please enter item cost",
    },
  ],
};

const imageUploadProps = {
  name: "file",
  multiple: true,
  listType: "picture-card",
  showUploadList: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const categories = ["Cloths", "Bags", "Shoes", "Watches", "Devices"];
const tags = ["Cotton", "Nike", "Sales", "Sports", "Outdoor", "Toys", "Hobbies"];

const GeneralField = (props) => (
  <Row gutter={16}>
    <Col xs={24} sm={24} md={17}>
      <Card title="주문 정보">
        <Form.Item name="name" label="고객" rules={rules.name}>
          <Input placeholder="고객 이름" />
          <Button type="primary" style={{ marginTop: "10px" }}>
            고객 찾기
          </Button>
        </Form.Item>
        <Form.Item name="name" label="받는 사람" rules={rules.name}>
          <Input placeholder="받는 사람 이름" />
          <Button type="primary" style={{ marginTop: "10px" }}>
            고객 찾기
          </Button>
        </Form.Item>
        <Form.Item name="description" label="주소" rules={rules.description}>
          <Input />
        </Form.Item>
      </Card>
      <Card title="주문 상품">
        <Table></Table>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={7}>
      <Card title="사진">
        <Dragger {...imageUploadProps} beforeUpload={beforeUpload} onChange={(e) => props.handleUploadChange(e)}>
          {props.uploadedImg ? (
            <img src={props.uploadedImg} alt="avatar" className="img-fluid" />
          ) : (
            <div>
              {props.uploadLoading ? (
                <div>
                  <LoadingOutlined className="font-size-xxl text-primary" />
                  <div className="mt-3">Uploading</div>
                </div>
              ) : (
                <div>
                  <CustomIcon className="display-3" svg={ImageSvg} />
                  <p>Click or drag file to upload</p>
                </div>
              )}
            </div>
          )}
        </Dragger>
      </Card>
      <Card title="기타 정보">
        <Form.Item name="category" label="배달">
          <Select className="w-100" placeholder="배달 여부">
            {categories.map((elm) => (
              <Option key={elm} value={elm}>
                {elm}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="tags" label="결제">
          <Select mode="tags" style={{ width: "100%" }} placeholder="결제 여부">
            {tags.map((elm) => (
              <Option key={elm}>{elm}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="tags" label="할인">
          <Select mode="tags" style={{ width: "100%" }} placeholder="할인 여부">
            {tags.map((elm) => (
              <Option key={elm}>{elm}</Option>
            ))}
          </Select>
        </Form.Item>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={24} xl={24}>
      <Card title={"판매자 메모"}>
        <TextArea rows={4} cols={24} bordered={false} />
      </Card>
    </Col>

    <Col xs={24} sm={24} md={24} xl={24}>
      <Card title={"구매자 메모"}>
        <TextArea rows={4} cols={24} bordered={false} />
      </Card>
    </Col>
  </Row>
);

export default GeneralField;
