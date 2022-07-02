import React, { useState } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import { Card, Table, Button, Select, Input } from "antd";
import { useLocation } from "react-router-dom";

const { Column } = Table;

function Invoice() {
  const location = useLocation();
  const [data, setData] = useState(location.state.selectedRows);
  const printTable = [
    {
      title: "고객이름",
      dataIndex: "customerName",
    },
    {
      title: "주소",
      dataIndex: "address",
    },
    {
      title: "받는 사람",
      dataIndex: "receiver",
    },
    {
      title: "전화번호",
      dataIndex: "phoneNumber",
      render: (_, record) => (
        <>
          <Select style={{ width: "200px" }} defaultValue={"첫번째"}>
            <Select.Option value={"첫번째"}>{record.phoneNumber}</Select.Option>
            <Select.Option value={"두번째"}>{record.secondPhoneNumber}</Select.Option>
            <Select.Option value={"기타"}>기타</Select.Option>
          </Select>
        </>
      ),
    },
  ];
  return (
    <div className="container">
      <Card>
        <div className="d-md-flex justify-content-md-between">
          <div>
            <img src="/img/logo2.png" alt="" />
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md" style={{ fontWeight: "bolder" }}>
                  평창산양삼랜드
                </span>
                <br />
                <span>강원 평창군 용평면 태기로 1043-161</span>
                <br />
                <span>사업자: 심세훈</span>
                <br />
                <abbr className="text-dark" title="Phone">
                  전화번호:
                </abbr>
                <span>(010) 3669-1147</span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-4">
          <Table columns={printTable} rowKey={data.id} dataSource={data} pagination={false} className="mb-5"></Table>
        </div>
        <hr className="d-print-none" />
        <div className="text-right d-print-none">
          <Button type="primary" onClick={() => window.print()}>
            <PrinterOutlined type="printer" />
            <span className="ml-1">인쇄</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Invoice;
