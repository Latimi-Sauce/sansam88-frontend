import { Button, Card, Col, Row, Select, Table, DatePicker } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { AddModal, DetailModal, tableColumns } from "../components/Dashboard";
import { connect } from "react-redux";
import {
  account,
  createLog,
  resetProject,
  updateLog,
  deleteTransaction,
  getLogList,
  deleteLog,
} from "redux/actions/Project";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router-dom";

export const diary = (props) => {
  const { loading, getLogList, logList, resetProject, createLog, updateLog, deleteLog, logPk } = props;
  const { RangePicker } = DatePicker;
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [fields, setFields] = useState();
  const [date, setDate] = useState(null);
  const [sort, setSort] = useState(null);
  const [detail, setDetail] = useState();
  const history = useHistory();
  const location = useLocation();
  const dateFormat = "YYYY-MM-DD";
  const showModal = () => {
    setModal(true);
  };

  const showDetailModal = (record) => {
    setFields([
      {
        name: ["id"],
        value: record.id,
      },
      {
        name: ["title"],
        value: record.title,
      },
      {
        name: ["content"],
        value: record.content,
      },
      {
        name: ["worker"],
        value: record.worker,
      },
      {
        name: ["note"],
        value: record.note,
      },
      {
        name: ["weather"],
        value: record.note,
      },
    ]);
    setDetail(record);
    setDetailModal(true);
  };

  const handleOk = (e) => {
    setModal(false);
    setDetailModal(false);
    getLogList(location.state.id);
  };

  const handleCancel = (e) => {
    setModal(false);
    setDetailModal(false);
  };
  const onFinish = (values) => {
    createLog(values, location.state.id);
  };
  const onUpdate = (values) => {
    updateLog(values, location.state.id);
    setDetailModal(false);
  };
  const onDelete = (values) => {
    Swal.fire({
      title: "?????????????????????????",
      text: "???????????? ???????????? ????????????.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "???",
      cancelButtonText: "?????????",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLog(values, location.state.id);
        Swal.fire("?????? ??????", "??????????????? ?????? ???????????????.", "success");
        setDetailModal(false);
      }
    });
  };
  const handlePage = (page) => {
    getLogList(location.state.id, date, page.current);
  };

  const handleDate = (date) => {
    if (date) {
      const list = { start: date[0].format("YYYY-MM-DD"), end: date[1].format("YYYY-MM-DD") };
      resetProject();
      getLogList(location.state.id, list);
      setDate(list);
    }
  };

  useEffect(() => {
    getLogList(location.state.id);
    return () => {
      resetProject();
    };
  }, []);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card title={`${location.state.title} ?????? ???????????? ??????`}>
            <Row justify="end">
              <RangePicker format={dateFormat} onChange={handleDate} />
            </Row>
            {loading == false && logList ? (
              <Table
                className="no-border-last"
                columns={tableColumns}
                dataSource={logList.result}
                rowKey="id"
                pagination={{ total: logList.pages * 10 }}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      showDetailModal(record);
                    },
                  };
                }}
                onChange={handlePage}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Table></Table>
            )}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row justify="space-between">
            <Button
              type="danger"
              onClick={() => {
                history.goBack();
              }}
            >
              ????????????
            </Button>
            <Button type="primary" onClick={showModal}>
              ??????
            </Button>
          </Row>
          <AddModal
            handleOk={handleOk}
            handleCancel={handleCancel}
            onFinish={onFinish}
            modal={modal}
            id={location.state.id}
            logPk={logPk}
            setModal={setModal}
          />
          {detailModal ? (
            <DetailModal
              handleOk={handleOk}
              fields={fields}
              handleCancel={handleCancel}
              onUpdate={onUpdate}
              onDelete={onDelete}
              modal={detailModal}
              detail={detail}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = ({ project }) => {
  const { loading, wallet, logList, createLog, logPk } = project;
  return { loading, wallet, logList, createLog, logPk };
};

const mapDispatchToProps = {
  resetProject,
  createLog,
  updateLog,
  deleteTransaction,
  getLogList,
  deleteLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(diary);
