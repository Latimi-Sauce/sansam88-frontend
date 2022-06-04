import React, { useState } from "react";
import { Row, Col, Button, Card, Table } from "antd";
import StatisticWidget from "components/shared-components/StatisticWidget";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { AnnualStatisticData, NewMembersData, RecentTransactionData } from "./components/DefaultDashboardData";
import { UserAddOutlined, UserSwitchOutlined, FileDoneOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import DataDisplayWidget from "components/shared-components/DataDisplayWidget";
import {
  newJoinMemberOption,
  latestTransactionOption,
  cardDropdown,
  WeeklyRevenue,
  RecentOrder,
  TopProduct,
  tableColumns,
} from "./components/Dashboard";

export const DefaultDashboard = () => {
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [newMembersData] = useState(NewMembersData);
  const [recentTransactionData] = useState(RecentTransactionData);

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Row gutter={16}>
            {annualStatisticData.map((elm, i) => (
              <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                <StatisticWidget title={elm.title} value={elm.value} status={elm.status} subtitle={elm.subtitle} />
              </Col>
            ))}
          </Row>
          <WeeklyRevenue />
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card title="고객 순위" extra={cardDropdown(newJoinMemberOption)}>
            <div className="mt-3">
              {newMembersData.map((elm, i) => (
                <div key={i} className={`d-flex align-items-center justify-content-between mb-4`}>
                  <AvatarStatus id={i} src={elm.img} name={elm.name} subTitle={elm.title} />
                  <div>
                    <Button icon={<UserAddOutlined />} type="default" size="small">
                      상세보기
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <DataDisplayWidget
                icon={<FileDoneOutlined />}
                value="11,831"
                title="총 주문"
                color="cyan"
                vertical={true}
                avatarSize={55}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <DataDisplayWidget
                icon={<UserSwitchOutlined />}
                value="873"
                title="총 회원 수"
                color="volcano"
                vertical={true}
                avatarSize={55}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <RecentOrder />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <TopProduct />
        </Col>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Card title="최근 거래내역" extra={cardDropdown(latestTransactionOption)}>
            <Table
              className="no-border-last"
              columns={tableColumns}
              dataSource={recentTransactionData}
              rowKey="id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(DefaultDashboard);
