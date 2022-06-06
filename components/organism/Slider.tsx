import { Carousel } from "antd";
import styled from "styled-components";
import Image from "next/image";
const SliderContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  & .slider-content {
    width: 100%;
  }
  .img {
    height: 460px;
    width: 100%;
    border-radius: 5px;
  }
  @media (max-width: 760px) {
    .search-bar {
      display: none;
    }
    .img {
      height: 200px;
      width: 100%;
    }
  }
`;

const Slider = () => {
  return (
    <SliderContainer>
      <div className="slider-content">
        <img
          className="img"
          src="/assets/slider1.jpg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </SliderContainer>
  );
};
export default Slider;
