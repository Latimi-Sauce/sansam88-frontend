import React from "react";
import utils from "utils";
import moment from "moment";
import {
  ArrowUpOutlined,
  CloudDownloadOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  ArrowDownOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Select, Badge } from "antd";
import Flex from "components/shared-components/Flex";
import AvatarStatus from "components/shared-components/AvatarStatus";
import NumberFormat from "react-number-format";
import { DATE_FORMAT_DD_MM_YYYY } from "constants/DateConstant";
import { useSelector } from "react-redux";
import ChartWidget from "components/shared-components/ChartWidget";
import { recentOrderData, topProductData, weeklyRevenueData } from "./SalesDashboardData";
import { COLORS } from "constants/ChartConstant";
import { Option } from "antd/lib/mentions";

export const tableColumns = [
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar size={30} className="font-size-sm" style={{ backgroundColor: record.avatarColor }}>
          {utils.getNameInitial(text)}
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

const getPaymentStatus = (status) => {
  if (status === "Paid") {
    return "success";
  }
  if (status === "Pending") {
    return "warning";
  }
  if (status === "Expired") {
    return "error";
  }
  return "";
};

const getShippingStatus = (status) => {
  if (status === "Ready") {
    return "blue";
  }
  if (status === "Shipped") {
    return "cyan";
  }
  return "";
};

export const orderTableColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Product",
    dataIndex: "name",
    render: (_, record) => (
      <Flex>
        <AvatarStatus size={30} src={record.image} name={record.name} />
      </Flex>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (_, record) => <span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: "Order status",
    dataIndex: "orderStatus",
    render: (_, record) => (
      <>
        <Tag color={getShippingStatus(record.orderStatus)}>{record.orderStatus}</Tag>
      </>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "orderStatus"),
  },
  {
    title: "Payment status",
    dataIndex: "paymentStatus",
    render: (_, record) => (
      <>
        <Badge status={getPaymentStatus(record.paymentStatus)} />
        <span>{record.paymentStatus}</span>
      </>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "paymentStatus"),
  },
  {
    title: "Total",
    dataIndex: "amount",
    render: (_, record) => (
      <span className="font-weight-semibold">
        <NumberFormat
          displayType={"text"}
          value={(Math.round(record.amount * 100) / 100).toFixed(2)}
          prefix={"$"}
          thousandSeparator={true}
        />
      </span>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "amount"),
  },
];

export const newJoinMemberOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusOutlined />
          <span className="ml-2">Add all</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <StopOutlined />
          <span className="ml-2">Disable all</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

export const WeeklyRevenue = () => {
  const { direction } = useSelector((state) => state.theme);
  return (
    <Card>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Flex className="h-100" flexDirection="column" justifyContent="between">
            <div>
              <h4 className="mb-0">주간 매출</h4>
              <span className="text-muted">8 - 15 Jul, 2020</span>
            </div>
            <div className="mb-4">
              <h1 className="font-weight-bold">27,188만원</h1>
              <p className="text-success">
                <span>
                  <ArrowUpOutlined />
                  <span> 17% </span>
                </span>
                <span>growth from last week</span>
              </p>
              <p>Total gross income figure based from the date range given above.</p>
            </div>
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <div className="mb-3 text-right">
            <Button icon={<CloudDownloadOutlined />}>Download Report</Button>
          </div>
          <ChartWidget
            card={false}
            series={weeklyRevenueData.series}
            xAxis={weeklyRevenueData.categories}
            title="Unique Visitors"
            height={"346"}
            type="bar"
            customOptions={{ colors: COLORS }}
            direction={direction}
          />
        </Col>
      </Row>
    </Card>
  );
};

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

export const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={(e) => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
);

export const TopProduct = () => (
  <Card
    title="상품 순위"
    extra={
      <Select defaultValue="week" size="small" style={{ minWidth: 110 }}>
        <Select.Option value="week">This Week</Select.Option>
        <Select.Option value="month">This Month</Select.Option>
        <Select.Option value="year">This Year</Select.Option>
      </Select>
    }
  >
    {topProductData.map((elm) => (
      <Flex className="w-100 py-3" justifyContent="between" alignItems="center" key={elm.name}>
        <AvatarStatus shape="square" src={elm.image} name={elm.name} subTitle={elm.category} />
        <Flex>
          <div className="mr-3 text-right">
            <span className="text-muted">Sales</span>
            <div className="mb-0 h5 font-weight-bold">
              <NumberFormat prefix={"$"} value={elm.sales} thousandSeparator={true} displayType="text" />
              {elm.status === "up" ? (
                <ArrowUpOutlined className="text-success" />
              ) : (
                <ArrowDownOutlined className="text-danger" />
              )}
            </div>
          </div>
        </Flex>
      </Flex>
    ))}
  </Card>
);
export const RecentOrder = () => (
  <Card title="최근 주문내역">
    <Table pagination={false} columns={orderTableColumns} dataSource={recentOrderData} rowKey="id" />
  </Card>
);
