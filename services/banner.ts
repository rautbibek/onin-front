import axiosClient from "../axios/axios";

const getBanner = async () => {
  return await axiosClient.get("/banner");
};

export { getBanner };
