import { Avatar, Card, Col, Menu, Row, Table, Tag } from "antd";
import { FileExcelOutlined, PrinterOutlined, ReloadOutlined } from "@ant-design/icons";
import StatisticWidget from "components/shared-components/StatisticWidget";
import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Utils from "utils";
import { cardDropdown } from "../components/Dashboard";
import { AnnualStatisticData, RecentTransactionData } from "../components/DefaultDashboardData";

export const tableColumns = [
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar size={30} className="font-size-sm" style={{ backgroundColor: record.avatarColor }}>
          {Utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: "status",
    render: (_, record) => (
      <div className="text-right">
        <Tag
          className="mr-0"
          color={record.status === "Approved" ? "cyan" : record.status === "Pending" ? "blue" : "volcano"}
        >
          {record.status}
        </Tag>
      </div>
    ),
  },
];

export const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

export const Wallet = () => {
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [recentTransactionData] = useState(RecentTransactionData);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row gutter={16}>
            {annualStatisticData.map((elm, i) => (
              <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                <StatisticWidget title={elm.title} value={elm.value} status={elm.status} subtitle={elm.subtitle} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card title="최근 거래내역" extra={cardDropdown(latestTransactionOption)}>
            <Table
              className="no-border-last"
              columns={tableColumns}
              dataSource={recentTransactionData}
              rowKey="id"
              pagination={true}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(Wallet);
