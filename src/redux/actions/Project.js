import {
  ACCOUNT,
  CREATE_ACCOUNT,
  DASHBOARD,
  UPDATE_TRANSACTION,
  RESET_PROJECT,
  DELETE_TRANSACTION,
  GET_ORDER_LIST,
  GET_ORDER,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER,
  CREATE_CUSTOMER,
  UPDATE_CUSTOEMR,
  DELETE_CUSTOMER,
  GET_PRODUCT_LIST,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_CATEGORY_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  CREATE_ORDERITEM,
  CREATE_ORDERIMAGE,
  GET_ORDERIMAGES,
  GET_ORDERITEMS,
} from "../constants/Project";

export const dashboard = () => {
  return {
    type: DASHBOARD,
  };
};

export const resetProject = () => {
  return {
    type: RESET_PROJECT,
  };
};

export const account = (date, sort, page) => {
  return {
    type: ACCOUNT,
    date,
    sort,
    page,
  };
};

export const createAccount = (value) => {
  return {
    type: CREATE_ACCOUNT,
    payload: value,
  };
};

export const updateTransaction = (value) => {
  return {
    type: UPDATE_TRANSACTION,
    payload: value,
  };
};

export const deleteTransaction = (pk) => {
  return {
    type: DELETE_TRANSACTION,
    payload: pk,
  };
};

// order
export const getOrderList = (data) => {
  return {
    type: GET_ORDER_LIST,
    data: data,
  };
};

export const getOrderImages = (data) => {
  return {
    type: GET_ORDERIMAGES,
    data: data,
  };
};

export const getOrderItems = (data) => {
  return {
    type: GET_ORDERITEMS,
    data: data,
  };
};

export const createOrder = (data) => {
  return {
    type: CREATE_ORDER,
    data,
  };
};

export const createOrderItem = (data) => {
  return {
    type: CREATE_ORDERITEM,
    data,
  };
};

export const updateOrder = (data) => {
  return {
    type: UPDATE_ORDER,
    data,
  };
};

export const deleteOrder = (pk) => {
  return {
    type: DELETE_ORDER,
    pk,
  };
};

export const createOrderImage = (data) => {
  return {
    type: CREATE_ORDERIMAGE,
    data,
  };
};

// customer
export const getCustomerList = (data) => {
  return {
    type: GET_CUSTOMER_LIST,
    data,
  };
};

export const getCustomer = (pk) => {
  return {
    type: GET_CUSTOMER,
    payload: pk,
  };
};

export const createCustomer = (data) => {
  return {
    type: CREATE_CUSTOMER,
    data,
  };
};

export const updateCustomer = (data) => {
  return {
    type: UPDATE_CUSTOEMR,
    data: data,
  };
};

export const deleteCustomer = (pk) => {
  return {
    type: DELETE_CUSTOMER,
    pk,
  };
};

//PRODUCT
export const getProduct = (data) => {
  return {
    type: GET_PRODUCT_LIST,
    data,
  };
};

export const postProduct = (data) => {
  return {
    type: CREATE_PRODUCT,
    data,
  };
};

export const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    data,
  };
};

export const deleteProduct = (pk) => {
  return {
    type: DELETE_PRODUCT,
    pk,
  };
};

//Category
export const getCategory = (data) => {
  return {
    type: GET_CATEGORY_LIST,
    data,
  };
};

export const postCategory = (data) => {
  return {
    type: CREATE_CATEGORY,
    data,
  };
};

export const updateCategory = (data) => {
  return {
    type: UPDATE_CATEGORY,
    data,
  };
};

export const deleteCategory = (pk) => {
  return {
    type: DELETE_CATEGORY,
    pk,
  };
};
