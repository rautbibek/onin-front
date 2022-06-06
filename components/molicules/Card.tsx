import { Button } from "antd";
import styled from "styled-components";
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  width: 100%;
  background-color: white;
  align-items: center;
  margin: 50px 0;
  & .content {
    width: 18.5%;
    justify-content: center;
    margin: 10px;
    float: left;
    cursor: pointer;
    padding: 15px;
    transition: 0.8s;
    background-color: white;
  }
  .price-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 10px;

    align-items: center;

    margin: 10px 0;
    & .current-price {
      font-size: 18px;
      font-weight: 600;
      color: #690;
    }
    & .discount-price {
      color: #f30;
    }
    & .discount-info {
      color: #f30;
    }
  }
  .content:hover {
    border: 1px solid #80808061;
    transform: scale(1.1);
    transform: 0.6;
  }
  .title {
    margin: 0;
    display: block;
    font-size: 14px;
    line-height: 1.7em;
    padding-bottom: 5px;
    padding-left: 0;
    color: #06c;
    --max-lines: 3;
    max-height: calc(1.2em * var(--max-lines));
    overflow: hidden;

    :hover {
      color: #fcb800;
    }
  }

  .action {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    margin-top: 15px;
  }
  .btn {
    padding: 3px 15px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: #fcb800;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    text-align: center;
    margin: 0 auto;
    display: block;
  }
  @media (max-width: 1000px) {
    .content {
      width: 22.5%;
    }
  }
  @media (max-width: 768px) {
    .content {
      width: 45%;
    }
  }
  @media (max-width: 425px) {
    .content {
      width: 100%;
    }
  }
`;
const Card = () => {
  return (
    <CardContainer>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online,Mens Shoes Price
          in Nepal - Buy Shoes For Men Online,Mens Shoes Price in Nepal - Buy
          Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online. Mens Shoes Price
          in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s></s>
          </div>
          <div className="discount-info"> </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
      <div className="content">
        <img
          src="https://rukminim1.flixcart.com/image/332/398/kyvvtzk0/shoe/5/q/w/9-500-corsac-black-original-imagbyzezm5vkhyf.jpeg?q=50"
          alt="shoes"
        />
        <div className="price-box">
          <div className="current-price">Rs.10000</div>
          <div className="discount-price">
            <s>Rs.1000</s>
          </div>
          <div className="discount-info"> - 13% Off </div>
        </div>
        <h3 className="title">
          Mens Shoes Price in Nepal - Buy Shoes For Men Online
        </h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
    </CardContainer>
  );
};
export default Card;
