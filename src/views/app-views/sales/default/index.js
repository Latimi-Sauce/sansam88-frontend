import React, { useEffect, useState } from "react";
import { DetailModal, RecentOrder } from "../components/Sales";
import { getOrderList, getOrder, resetProject } from "redux/actions/Project";
import { connect } from "react-redux";
import Swal from "sweetalert2";

export const SalesList = (props) => {
  const { loading, order, getOrderList, resetProject } = props;
  const [detailModal, setDetailModal] = useState();
  const [detail, setDetail] = useState();
  const handleOk = () => {
    setDetailModal(false);
  };
  const handleCreate = (values) => {
    setDetailModal(false);
  };
  const handleCancel = (e) => {
    setDetailModal(false);
  };
  const onUpdate = (values) => {
    // updateCustomer(values);
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
        // deleteCustomer(values);
        Swal.fire("삭제 완료", "정상적으로 삭제 되었습니다.", "success");
        setDetailModal(false);
      }
    });
  };

  const showDetailModal = (record) => {
    setDetail(record);
    setDetailModal(true);
  };
  useEffect(() => {
    getOrderList();
    return () => {
      resetProject();
    };
  }, []);
  return (
    <>
      <div>
        {loading == false ? (
          <RecentOrder recentOrderData={order.result} getOrderList={getOrderList} showDetailModal={showDetailModal} />
        ) : (
          ""
        )}
      </div>
      {detailModal ? (
        <DetailModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          onUpdate={onUpdate}
          onDelete={onDelete}
          modal={detailModal}
          detail={detail}
          setDetail={setDetail}
          onCreate={handleCreate}
        />
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = ({ project }) => {
  const { loading, order } = project;
  return { loading, order };
};

const mapDispatchToProps = {
  getOrderList,
  getOrder,
  resetProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesList);
