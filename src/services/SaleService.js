import fetch from "auth/FetchInterceptor";

const SaleService = {};

SaleService.getOrderList = function (receiver) {
  if (typeof receiver === "object") {
    let value;
    let temp = parseInt(receiver.value);
    if (!isNaN(temp)) {
      value = temp;
    } else {
      value = receiver.value;
    }
    if (typeof value === "string" && value !== "refund") {
      return fetch({
        url: `/api/v1/orders/?receiver=${value}`,
        method: "get",
      });
    } else if (typeof value === "number") {
      return fetch({
        url: `/api/v1/orders/?orderNumber=${value}`,
        method: "get",
      });
    } else if (receiver.start && receiver.end) {
      return fetch({
        url: `/api/v1/orders/?start=${receiver.start}&end=${receiver.end}`,
        method: "get",
      });
    }
  } else {
    if (typeof receiver === "number") {
      return fetch({
        url: `/api/v1/orders/?page=${receiver}`,
        method: "get",
      });
    } else if (typeof receiver === "boolean" || receiver === "refund") {
      return fetch({
        url: `/api/v1/orders/?paid=${receiver}`,
        method: "get",
      });
    } else {
      return fetch({
        url: "/api/v1/orders/",
        method: "get",
      });
    }
  }
};

export default SaleService;
