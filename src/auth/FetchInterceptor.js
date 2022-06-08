import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";
import history from "../history";
import { AUTH_TOKEN } from "redux/constants/Auth";
import { notification } from "antd";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// Config
const ENTRY_ROUTE = "/auth/login";
const TOKEN_PAYLOAD_KEY = "authorization";

// API Request interceptor
service.interceptors.request.use(
  async (config) => {
    let jwtToken = localStorage.getItem(AUTH_TOKEN);
    config.headers["Content-Type"] = "application/json";
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;

    if (!jwtToken) {
      history.push(ENTRY_ROUTE);
    }
    // jwt validator를 사용하여 유저가 있는지 확인하는 api 호출 해야한다.
    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    let notificationParam = {
      message: "",
    };

    if (error.response.status === 401) {
      try {
        const originalRequest = error.config;
        const referal = await axios.post(
          `${API_BASE_URL}/api/v1/users/login/refresh/`,
          { data: "hi" },
          {
            withCredentials: "include",
          }
        );
        localStorage.setItem(AUTH_TOKEN, referal.data.access);
        originalRequest.headers.authorization = `Bearer ${referal.data.access}`;
        return axios(originalRequest);
      } catch (e) {
        localStorage.removeItem(AUTH_TOKEN);
        history.push(ENTRY_ROUTE);
        window.location.reload();
      }
    }

    // Remove token and redirect
    if (error.response.status === 400 || error.response.status === 403) {
      notificationParam.message = "유저정보가 맞지 않습니다.";
      notificationParam.description = "다시 로그인 해주세요";
      localStorage.removeItem(AUTH_TOKEN);
      history.push(ENTRY_ROUTE);
      window.location.reload();
    }

    if (error.response.status === 404) {
      notificationParam.message = "Not Found";
    }

    if (error.response.status === 500) {
      notificationParam.message = "Internal Server Error";
    }

    if (error.response.status === 508) {
      notificationParam.message = "Time Out";
    }
    notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;