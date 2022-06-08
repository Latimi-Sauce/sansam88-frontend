import fetch from "auth/FetchInterceptor";
import axios from "axios";

const JwtAuthService = {};

JwtAuthService.login = function (data) {
  return fetch({
    url: "/api/v1/users/login/token/",
    method: "post",
    data: data,
    withCredentials: true,
  });
};

JwtAuthService.getWallet = function (token) {
  return fetch({
    url: "/api/v1/accounts/",
    method: "get",
  });
};

JwtAuthService.signUp = function (data) {
  return fetch({
    url: "/auth/signup",
    method: "post",
    headers: {
      "public-request": "true",
    },
    data: data,
  });
};

export default JwtAuthService;
