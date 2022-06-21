import axiosClient from "../axios/axios";

const getProductDetail = async (id: string) => {
  return await axiosClient.get("/product/" + id);
};

export { getProductDetail };
