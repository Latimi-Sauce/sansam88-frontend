import React, { useState } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import { Card, Table, Button } from "antd";
import { invoiceData } from "./invoiceData";
import NumberFormat from "react-number-format";
import { useLocation } from "react-router-dom";

const { Column } = Table;

function Invoice() {
  const location = useLocation();
  const [data, setData] = useState(location.state.selectedRows);
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
                <span>경기도 평택시 고덕면 고덕북로</span>
                <br />
                <span>해피하우스 C동 201호</span>
                <br />
                <abbr className="text-dark" title="Phone">
                  전화번호:
                </abbr>
                <span>(123) 456-7890</span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-4">
          <Table dataSource={data} pagination={false} className="mb-5">
            <Column title="고객이름" dataIndex="customerName" key="customerName" />
            <Column title="주소" dataIndex="address" key="address" />
            <Column title="받는 사람" dataIndex="receiver" key="receiver" />
            <Column title="전화번호" dataIndex="phoneNumber" key="phoneNumber" />
          </Table>
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
