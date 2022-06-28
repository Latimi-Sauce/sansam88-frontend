import { Button, Card, InputNumber, Modal, Table, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ProductModal from "../components/ProductModal";
import { createOrderItem, deleteOrder, getProduct, resetProject } from "redux/actions/Project";
import { connect } from "react-redux";
import { API_BASE_URL } from "configs/AppConfig";
import { useHistory } from "react-router-dom";
import utils from "utils";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const uploadButton = (
  <div>
    <PlusOutlined />
    <div className="ant-upload-text">Upload</div>
  </div>
);

function selectProduct(props) {
  const { location, loading, getProduct, product, resetProject, createOrderItem, deleteOrder } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [validator, setValidator] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  // productModal
  const [showProductModal, setShowProductModal] = useState(false);
  const [cart, setCart] = useState([]);
  const history = useHistory();
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleproducts = (id, value) => {
    if (products.length != 0) {
      for (const i in products) {
        if (products[i].id === id) {
          setProducts((prev) => {
            prev[i].value = value;
            return [...prev];
          });
        }
      }
    }
  };
  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id != id));
    setCart(cart.filter((item) => item.id != id));
  };
  const goToOrder = () => {
    if (products.length > 0) {
      for (const i in products) {
        createOrderItem(products[i]);
      }
      setValidator(true);
    }

    if (products != []) {
      location.state.orderPk = null;
      history.push("/app/sales");
    }
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const columns = [
    {
      title: "상품",
      dataIndex: "name",
      render: (_, record) => <span>{record.name}</span>,
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "수량",
      dataIndex: "qty",
      render: (_, record) => (
        <InputNumber min={1} max={record.qty} defaultValue={1} onChange={(value) => handleproducts(record.id, value)} />
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "qty"),
    },
    {
      title: "가격",
      dataIndex: "price",
      render: (_, record) => (
        <span>{products.length != 0 ? products.find((x) => x.id === record.id).value * record.price : ""}원</span>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "price"),
    },
    {
      render: (_, record) => (
        <Button
          type="danger"
          onClick={() => {
            deleteProduct(record.id);
          }}
        >
          삭제
        </Button>
      ),
    },
  ];

  // Product Functions
  const handleShowModal = () => {
    setShowProductModal(true);
  };
  const handleProductCancel = () => {
    setShowProductModal(false);
  };
  const handleOk = (data) => {
    if (!cart.includes(data)) {
      setCart([...cart, data]);
      setProducts([...products, { id: data.id, value: 1, order: location.state.orderPk["orderPk"] }]);
    }
    setShowProductModal(false);
  };

  useEffect(() => {
    getProduct();
    return () => {
      if (location.state.orderPk != null) {
        deleteOrder(location.state.orderPk["orderPk"]);
      } else {
        resetProject();
      }
    };
  }, []);
  useEffect(() => {
    if (!location.state.orderPk) {
      history.goBack();
    }
  }, [location.state.orderPk]);
  return (
    <>
      <Card title={"주문 상품"}>
        <Button onClick={handleShowModal}>상품 추가</Button>
        <Table dataSource={cart} rowKey={"id"} columns={columns}></Table>
      </Card>
      <Card title={"주문 사진"}>
        <div className="clearfix">
          <Upload
            name="file"
            action={`${API_BASE_URL}/api/v1/orders/orderImage/create/${location.state.orderPk["orderPk"]}`}
            headers={{
              Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            }}
            withCredentials={true}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </Card>
      <Button type="primary" onClick={goToOrder}>
        저장
      </Button>
      <ProductModal
        visible={showProductModal}
        getProduct={getProduct}
        product={product}
        handleOk={handleOk}
        handleCancel={handleProductCancel}
      />
    </>
  );
}

const mapStateToProps = ({ project }) => {
  const { loading, category, product, pages, orderPk } = project;
  return { loading, product, pages, category, orderPk };
};

const mapDispatchToProps = {
  resetProject,
  getProduct,
  createOrderItem,
  deleteOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(selectProduct);
