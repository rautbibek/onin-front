import styled from "styled-components";
import { Carousel } from "antd";

const SliderContainer = styled(Carousel)`
  background: #e2d9d9;

  & .slider-content {
    width: 100%;
  }
  .image-container {
    position: relative;
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .btn {
    padding: 10px 30px;
    border-radius: 40px;
    border: none;
    color: black;
    font-weight: 400;
    background: #fcb800;
    h1 {
      font-weight: 700;
      color: black;
    }
    p {
      font-weight: 700;
      color: black;
    }
  }
  .img {
    height: 500px;
    width: 100%;
    object-fit: cover;
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

const MainSlider = (props: any) => {
  const { slides } = props;
  console.log(slides);

  return (
    <SliderContainer dotPosition="bottom" autoplay className="car">
      {slides.map((slide: any) => (
        <div key={slide.id} className="image-container">
          <img
            className="img"
            src={process.env.NEXT_PUBLIC_IMAGE_PATH + "/banner/" + slide.image}
            alt={slide.image}
          />
          <div className="info">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            {slide.link ? (
              <a target="_black" href={slide.link} className="btn">
                Load More
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </SliderContainer>
  );
};
export default MainSlider;
