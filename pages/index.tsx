import type { NextPage } from "next";
import Slider from "../components/organism/Slider";
import SiteOption from "../components/molicules/SiteOption";
import CollectionProduct from "../components/organism/CollectionProduct";
import Card from "../components/molicules/Card";
import Row from "../components/atom/row";
import AllProduct from "../components/organism/AllProduct";
const Home: NextPage = () => {
  return (
    <div>
      <Slider></Slider>
      <SiteOption></SiteOption>
      <CollectionProduct></CollectionProduct>
      <AllProduct></AllProduct>
    </div>
  );
};

export default Home;
