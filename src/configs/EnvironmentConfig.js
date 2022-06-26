const dev = {
  API_ENDPOINT_URL: "http://dev-sansam.ap-northeast-2.elasticbeanstalk.com",
};

const prod = {
  API_ENDPOINT_URL: "http://dev-sansam.ap-northeast-2.elasticbeanstalk.com",
};

const test = {
  API_ENDPOINT_URL: "http://dev-sansam.ap-northeast-2.elasticbeanstalk.com",
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
