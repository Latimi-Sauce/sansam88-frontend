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

export const AddFarm = (props) => {
  const { loading, resetProject, getCustomerList, updateCustomer, deleteCustomer, createCustomer, customerList } =
    props;
  const [detail, setDetail] = useState();
  const [detailModal, setDetailModal] = useState(false);
  const history = useHistory();
  const handleOk = (e) => {
    setDetailModal(false);
  };
  const handleCreate = (values) => {
    values.phoneNumber = values.phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    createCustomer(values);
    setDetailModal(false);
  };
  const handleCancel = (e) => {
    setDetailModal(false);
  };
  const onUpdate = (values) => {
    values.phoneNumber = values.phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    updateCustomer(values);
    setDetailModal(false);
  };
  const onDelete = (values) => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "삭제하면 되돌릴수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCustomer(values);
        Swal.fire("삭제 완료", "정상적으로 삭제 되었습니다.", "success");
        setDetailModal(false);
      }
    });
  };

  const showDetailModal = (record) => {
    setDetail(record);
    setDetailModal(true);
  };
  const onSearch = (e) => {
    const value = e.currentTarget.value;
    getCustomerList(value);
  };

  const initializeList = (e) => {
    if (e.currentTarget.value === "") {
      getCustomerList();
    }
  };
  const goToDiary = () => {
    history.push("/app/events/farm/1");
  };
  useEffect(() => {
    getCustomerList();
    return () => {
      resetProject();
    };
  }, []);
  return <div>create</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFarm);
