import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://system.onininternational.com/api/v1",
});

const requestHandler = (request) => {
  request.Accept = "Application/json";
  // request.headers.Authorization = `Bearer ${store.state["auth"].user.token}`;
  return request;
};

const responseHandler = (response) => {
  // console.log(response);
  if (response?.data?.message) {
    // Notify.create({
    //   type: "positive",
    //   timeout: 1000,
    //   progress: true,
    //   message: response?.data?.message,
    // });
  }
  return response;
};

const errorHandler = (error) => {
  if (error.response?.status === 401) {
    // Notify.create({
    //   progress: true,
    //   timeout: 1000,
    //   type: "negative",
    //   message: "Unauthorized access",
    // });
    // localStorage.removeItem("TOKEN");
    // router.push({ name: "Login" });
  } else {
    // Notify.create({
    //   progress: true,
    //   timeout: 1000,
    //   type: "negative",
    //   message: error.message,
    // });
  }
  if (error.response?.status === 500) {
    // Notify.create(
    //   {
    //     progress: true,
    //     timeout: 2000,
    //     type: "negative",
    //     message: "Internal server error.",
    //   },
    //   100
    // );
    //localStorage.removeItem("TOKEN");
    //router.push({ name: "Login" });
  }
  return Promise.reject(error);
};

axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosClient;
