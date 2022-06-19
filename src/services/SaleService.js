import fetch from "auth/FetchInterceptor";

const SaleService = {};

SaleService.getOrderList = function (receiver) {
  console.log(receiver);
  if (receiver) {
    return fetch({
      url: `/api/v1/orders/?receiver=${receiver}`,
      method: "get",
    });
  }
  return fetch({
    url: "/api/v1/orders/",
    method: "get",
  });
};

export default SaleService;
