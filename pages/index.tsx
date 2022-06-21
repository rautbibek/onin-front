import type { NextPage } from "next";
import MainSlider from "../components/organism/Slider";
import SiteOption from "../components/molicules/SiteOption";
import CollectionProduct from "../components/organism/CollectionProduct";

import AllProduct from "../components/organism/AllProduct";
import axiosClient from "../axios/axios";
import { useQuery } from "react-query";
const Home: NextPage = () => {
  const banner = async () => {
    return await axiosClient.get("/banner");
  };
  const { isLoading, isFetching, data, isError } = useQuery("banner", banner);

  return (
    <div>
      {isLoading ? "" : <MainSlider slides={data?.data.home}></MainSlider>}
      <SiteOption></SiteOption>
      <CollectionProduct></CollectionProduct>
      <AllProduct></AllProduct>
    </div>
  );
};

export default Home;
