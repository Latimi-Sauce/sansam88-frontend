import fetch from "auth/FetchInterceptor";

const CustomerService = {};

CustomerService.getCustomerList = function (data) {
  if (data) {
    return fetch({
      url: `/api/v1/customers/?keyword=${data}`,
      method: "get",
    });
  }
  return fetch({
    url: "/api/v1/customers/",
    method: "get",
  });
};

CustomerService.postCustomer = function (data) {
  return fetch({
    url: `/api/v1/customers/create/`,
    method: "post",
    data: data,
  });
};

CustomerService.getCustomer = function (pk) {
  return fetch({
    url: `/api/v1/customer/${pk}`,
    method: "get",
  });
};

CustomerService.putCustomer = function (data) {
  console.log(data);
  return fetch({
    url: `/api/v1/customers/update/${data.id}`,
    method: "put",
    data: data,
  });
};

CustomerService.deleteCustomer = function (pk) {
  return fetch({
    url: `/api/v1/customers/delete/${pk}`,
    method: "delete",
  });
};

export default CustomerService;
