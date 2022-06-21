import axiosClient from "../axios/axios";

const getProductReview = async (product_id: string) => {
  return await axiosClient.get(`/product/review/${product_id}`);
};

export { getProductReview };
