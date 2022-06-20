import React, { useEffect, useState } from "react";
import { CustomerList, DetailModal } from "../components/Customer";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  resetProject,
  getCustomerList,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  createCustomer,
} from "redux/actions/Project";
import Swal from "sweetalert2";
import { Button, Card, Input, Row } from "antd";
import Flex from "components/shared-components/Flex";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router-dom";

export const Farms = (props) => {
  const { loading, resetProject, getCustomerList, updateCustomer, deleteCustomer, createCustomer, customerList } =
    props;
  const history = useHistory();
  const goToDiary = () => {
    history.push("/app/events/farm/1");
  };
  useEffect(() => {
    getCustomerList();
    return () => {
      resetProject();
    };
  }, []);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      onClick={goToDiary}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

const mapStateToProps = ({ project }) => {
  const { loading, customer, customerList } = project;
  return { loading, customer, customerList };
};

const mapDispatchToProps = {
  resetProject,
  getCustomerList,
  getCustomer,
  updateCustomer,
  createCustomer,
  deleteCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farms);
