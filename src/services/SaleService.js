import fetch from "auth/FetchInterceptor";

const SaleService = {};

SaleService.getOrderList = function (receiver) {
  if (typeof receiver == "string") {
    return fetch({
      url: `/api/v1/orders/?receiver=${receiver}`,
      method: "get",
    });
  } else if (typeof receiver == "number") {
    return fetch({
      url: `/api/v1/orders/?page=${receiver}`,
      method: "get",
    });
  } else if (typeof receiver == "boolean") {
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
};

export default SaleService;
