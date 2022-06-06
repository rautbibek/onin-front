import type { NextPage } from "next";
import Slider from "../components/organism/Slider";
import SiteOption from "../components/molicules/SiteOption";
import CollectionProduct from "../components/organism/CollectionProduct";
import Card from "../components/molicules/Card";
const Home: NextPage = () => {
  return (
    <div>
      <Slider></Slider>
      <SiteOption></SiteOption>
      <CollectionProduct></CollectionProduct>
      <Card></Card>
    </div>
  );
};

export default Home;
