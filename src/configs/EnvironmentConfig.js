const dev = {
  API_ENDPOINT_URL: "http://175.45.192.116",
};

const prod = {
  API_ENDPOINT_URL: "http://175.45.192.116",
};

const test = {
  API_ENDPOINT_URL: "http://175.45.192.116",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
};

export const env = getEnv();
