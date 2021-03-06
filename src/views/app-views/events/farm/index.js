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
  getFarmList,
  updateFarm,
  deleteOrder,
  deleteFarm,
} from "redux/actions/Project";
import Swal from "sweetalert2";
import { Button, Card, Col, Input, Radio, Row } from "antd";
import Flex from "components/shared-components/Flex";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router-dom";
import { API_BASE_URL } from "configs/AppConfig";
import { UpdateModal } from "../components/Farm";

export const Farms = (props) => {
  const { loading, resetProject, getFarmList, farmList, updateFarm, deleteFarm } = props;
  const history = useHistory();
  const [mode, setMode] = useState("read");
  const [fields, setFields] = useState();
  const [detailModal, setDetailModal] = useState();
  const [deleteId, setDeleteId] = useState();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
    const data = farmList.result.find((x) => x.id === e.target.value);
    setFields([
      {
        name: ["id"],
        value: data.id,
      },
      {
        name: ["title"],
        value: data.title,
      },
      {
        name: ["introduction"],
        value: data.introduction,
      },
      {
        name: ["description"],
        value: data.description,
      },
    ]);
    setDeleteId(data.id);
    setDetailModal(true);
  };
  const goToDiary = (id, title) => {
    history.push({ pathname: `/app/events/farm/${id}`, state: { id, title } });
  };
  const handleCancel = (e) => {
    setDetailModal(false);
  };
  const onUpdate = (values) => {
    updateFarm(values);
    setDetailModal(false);
  };
  const handleOk = () => {
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
        deleteFarm(values);
        getFarmList();
        Swal.fire("?????? ??????", "??????????????? ?????? ???????????????.", "success");
        setDetailModal(false);
      }
    });
  };
  useEffect(() => {
    getFarmList();
    return () => {
      resetProject();
    };
  }, []);

  return (
    <Card title={mode === "read" ? "?????? ?????? ?????????" : "?????? ?????? ?????????"}>
      <Row gutter={16} justify="end" style={{ marginBottom: "10px", marginRight: "20px" }}>
        {mode === "read" ? (
          <Button type="primary" onClick={() => setMode("update")}>
            ?????? ??????
          </Button>
        ) : (
          ""
        )}
        {mode === "update" ? (
          <Button type="danger" onClick={() => setMode("read")}>
            ?????? ??????
          </Button>
        ) : (
          ""
        )}
      </Row>
      {mode === "update" ? (
        <Radio.Group value={value} onChange={onChange}>
          <Row justify="center">
            {farmList
              ? farmList.result.map((i) => (
                  <Radio key={i.id} value={i.id}>
                    <Col key={i.id} xs={24} sm={24} md={12} lg={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <img
                            alt="example"
                            src={
                              i.image
                                ? `${i.image}`
                                : "https://i.picsum.photos/id/1043/200/200.jpg?hmac=i7xbST4bM6KMg5XsUaVYvDgwvsZ3VskoXKRqGf1BjcU"
                            }
                          />
                        }
                        onClick={() => {
                          setValue(i.id);
                          setFields([
                            {
                              name: ["id"],
                              value: i.id,
                            },
                            {
                              name: ["title"],
                              value: i.title,
                            },
                            {
                              name: ["introduction"],
                              value: i.introduction,
                            },
                            {
                              name: ["description"],
                              value: i.description,
                            },
                          ]);
                          setDeleteId(i.id);
                          setDetailModal(true);
                        }}
                      >
                        <Meta title={i.title} description={i.introduction} />
                      </Card>
                    </Col>
                  </Radio>
                ))
              : ""}
          </Row>
        </Radio.Group>
      ) : (
        ""
      )}
      {mode === "read" ? (
        <Row justify="center">
          {farmList
            ? farmList.result.map((i) => (
                <Col key={i.id} xs={24} sm={24} md={12} lg={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={
                          i.image
                            ? `${i.image}`
                            : "https://i.picsum.photos/id/1043/200/200.jpg?hmac=i7xbST4bM6KMg5XsUaVYvDgwvsZ3VskoXKRqGf1BjcU"
                        }
                      />
                    }
                    onClick={() => goToDiary(i.id, i.title)}
                  >
                    <Meta title={i.title} description={i.introduction} />
                  </Card>
                </Col>
              ))
            : ""}
        </Row>
      ) : (
        ""
      )}
      <UpdateModal
        modal={detailModal}
        handleOk={handleOk}
        fields={fields}
        handleCancel={handleCancel}
        onDelete={onDelete}
        onUpdate={onUpdate}
        deleteId={deleteId}
      />
    </Card>
  );
};

const mapStateToProps = ({ project }) => {
  const { loading, farmList } = project;
  return { loading, farmList };
};

const mapDispatchToProps = {
  resetProject,
  updateFarm,
  getFarmList,
  deleteFarm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farms);
