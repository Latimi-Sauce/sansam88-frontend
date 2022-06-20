import { all, put, fork, call, takeEvery } from "redux-saga/effects";

import DashboardService from "services/DashboardService";
import {
  ACCOUNT,
  CATEGORY_FAIL,
  CATEGORY_SUCCESS,
  CREATE_ACCOUNT,
  CREATE_CATEGORY,
  CREATE_CUSTOMER,
  CREATE_ORDER,
  CREATE_ORDERIMAGE,
  CREATE_ORDERITEM,
  CREATE_PRODUCT,
  DASHBOARD,
  DELETE_CATEGORY,
  DELETE_CUSTOMER,
  DELETE_ORDER,
  DELETE_PRODUCT,
  DELETE_TRANSACTION,
  GET_ACCOUNT_FAIL,
  GET_ACCOUNT_SUCCESS,
  GET_CATEGORY_LIST,
  GET_CUSTOMERLIST_FAIL,
  GET_CUSTOMERLIST_SUCCESS,
  GET_CUSTOMER_FAIL,
  GET_CUSTOMER_LIST,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
  GET_ORDERIMAGES,
  GET_ORDERIMAGE_SUCCESS,
  GET_ORDERITEMS,
  GET_ORDERITEMS_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_LIST,
  GET_ORDER_SUCCESS,
  GET_PRODUCT_LIST,
  LOADING,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
  RESET_PROJECT,
  UPDATE_CATEGORY,
  UPDATE_CUSTOEMR,
  UPDATE_ORDER,
  UPDATE_PRODUCT,
  UPDATE_TRANSACTION,
} from "redux/constants/Project";
import SaleService from "services/SaleService";
import CustomerService from "services/CustomerService";
import ProductService from "services/ProductService";
import CategoryService from "services/CategoryService";
import OrderService from "services/OrderService";

export function* dashboard() {
  yield takeEvery(DASHBOARD, function* () {
    try {
      const account = yield call(DashboardService.getAccount);
      let customer = yield call(DashboardService.getCustomer);
      customer = { list: customer.result.slice(0, 6), count: customer.count };
      let order = yield call(DashboardService.getOrder);
      order = { list: order.result.slice(0, 5), count: order.count };
      let product = yield call(DashboardService.getProduct);
      product = { list: product.result.slice(0, 5) };
      let transaction = yield call(DashboardService.getTransaction, null);
      transaction = { list: transaction.result.slice(0, 5) };
      yield put({ type: GET_DASHBOARD_SUCCESS, account, customer, order, product, transaction });
    } catch (err) {
      yield put({ type: GET_DASHBOARD_FAIL, err });
    }
  });
}

export function* account() {
  yield takeEvery(ACCOUNT, function* (data) {
    try {
      let date = data.date;
      if (date === undefined) {
        date = null;
      }
      const account = yield call(DashboardService.getAccount);
      const transaction = yield call(DashboardService.getTransaction, date, data.sort, data.page);
      yield put({ type: GET_ACCOUNT_SUCCESS, account, transaction });
    } catch (err) {
      yield put({ type: GET_ACCOUNT_FAIL, err });
    }
  });
}
export function* createAccount() {
  yield takeEvery(CREATE_ACCOUNT, function* (payload) {
    try {
      yield call(DashboardService.setTransaction, payload);
      yield put({ type: RESET_PROJECT });
      yield put({ type: ACCOUNT });
    } catch (err) {
      yield put({ type: GET_ACCOUNT_FAIL, err });
    }
  });
}

export function* updateTransaction() {
  yield takeEvery(UPDATE_TRANSACTION, function* (payload) {
    try {
      yield call(DashboardService.updateTransaction, payload);
      yield put({ type: RESET_PROJECT });
      yield put({ type: ACCOUNT });
    } catch (err) {
      yield put({ type: GET_ACCOUNT_FAIL, err });
    }
  });
}

export function* deleteTransaction() {
  yield takeEvery(DELETE_TRANSACTION, function* (payload) {
    try {
      yield call(DashboardService.deleteTransaction, payload);
      yield put({ type: RESET_PROJECT });
      yield put({ type: ACCOUNT });
    } catch (err) {
      yield put({ type: GET_ACCOUNT_FAIL, err });
    }
  });
}

// sale
export function* getOrderList() {
  yield takeEvery(GET_ORDER_LIST, function* (payload) {
    try {
      const orderList = yield call(SaleService.getOrderList, payload.data);
      yield put({ type: GET_ORDER_SUCCESS, orderList });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
}

//customer
export function* customer() {
  yield takeEvery(GET_CUSTOMER_LIST, function* (payload) {
    try {
      const data = yield call(CustomerService.getCustomerList, payload.data);
      yield put({ type: GET_CUSTOMERLIST_SUCCESS, data });
    } catch (err) {
      yield put({ type: GET_CUSTOMERLIST_FAIL, err });
    }
  });
  yield takeEvery(CREATE_CUSTOMER, function* (payload) {
    try {
      yield call(CustomerService.postCustomer, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: GET_CUSTOMER_LIST });
    } catch (err) {
      yield put({ type: GET_CUSTOMER_FAIL, err });
    }
  });
  yield takeEvery(UPDATE_CUSTOEMR, function* (payload) {
    try {
      yield call(CustomerService.putCustomer, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: GET_CUSTOMER_LIST });
    } catch (err) {
      yield put({ type: GET_CUSTOMER_FAIL, err });
    }
  });
  yield takeEvery(DELETE_CUSTOMER, function* (payload) {
    try {
      yield call(CustomerService.deleteCustomer, payload.pk);
      yield put({ type: RESET_PROJECT });
      yield put({ type: GET_CUSTOMER_LIST });
    } catch (err) {
      yield put({ type: GET_CUSTOMER_FAIL, err });
    }
  });
}

//PRODUCT
export function* product() {
  yield takeEvery(GET_PRODUCT_LIST, function* (payload) {
    try {
      yield put({ type: LOADING });
      const data = yield call(ProductService.getProductList, payload.data);
      yield put({ type: PRODUCT_SUCCESS, data });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
  yield takeEvery(CREATE_PRODUCT, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(ProductService.postProduct, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
  yield takeEvery(UPDATE_PRODUCT, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(ProductService.putProduct, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
  yield takeEvery(DELETE_PRODUCT, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(ProductService.deleteProduct, payload.pk);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
}

//CATEGORY
export function* category() {
  yield takeEvery(GET_CATEGORY_LIST, function* () {
    try {
      yield put({ type: LOADING });
      const data = yield call(CategoryService.getCategoryList);
      yield put({ type: CATEGORY_SUCCESS, data });
    } catch (err) {
      yield put({ type: CATEGORY_FAIL, err });
    }
  });
  yield takeEvery(CREATE_CATEGORY, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(CategoryService.postCategory, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
  yield takeEvery(UPDATE_CATEGORY, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(CategoryService.putCategory, payload.data);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
  yield takeEvery(DELETE_CATEGORY, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(CategoryService.deleteCategory, payload.pk);
      yield put({ type: RESET_PROJECT });
      yield put({ type: PRODUCT_SUCCESS });
    } catch (err) {
      yield put({ type: PRODUCT_FAIL, err });
    }
  });
}

//ORDER
export function* order() {
  yield takeEvery(CREATE_ORDER, function* (payload) {
    try {
      yield put({ type: LOADING });
      const orderPk = yield call(OrderService.postOrder, payload.data);
      yield put({ type: GET_ORDER_SUCCESS, orderPk });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(UPDATE_ORDER, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(OrderService.putOrder, payload.data);
      yield put({ type: GET_ORDER_LIST });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(DELETE_ORDER, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(OrderService.deleteOrder, payload.pk);
      yield put({ type: GET_ORDER_LIST });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(CREATE_ORDERITEM, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(OrderService.postOrderItem, payload.data);
      yield put({ type: GET_ORDER_SUCCESS });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(CREATE_ORDERIMAGE, function* (payload) {
    try {
      yield put({ type: LOADING });
      yield call(OrderService.postOrderImage, payload.data);
      yield put({ type: GET_ORDER_SUCCESS });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(GET_ORDERIMAGES, function* (payload) {
    try {
      const data = yield call(OrderService.getOrderImages, payload.data);
      yield put({ type: GET_ORDERIMAGE_SUCCESS, data });
      yield put({ type: GET_ORDER_LIST });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
  yield takeEvery(GET_ORDERITEMS, function* (payload) {
    try {
      const data = yield call(OrderService.getOrderItems, payload.data);
      yield put({ type: GET_ORDERITEMS_SUCCESS, data });
      yield put({ type: GET_ORDER_LIST });
    } catch (err) {
      yield put({ type: GET_ORDER_FAIL, err });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(account),
    fork(dashboard),
    fork(createAccount),
    fork(updateTransaction),
    fork(deleteTransaction),
    fork(getOrderList),
    fork(order),
    fork(customer),
    fork(product),
    fork(category),
  ]);
}
