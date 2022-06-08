import { Button } from "antd";
import { useState } from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  float: left;
  width: 20%;
  padding: 0 10px;
  margin-bottom: 20px;
  background: white;

  cursor: pointer;
  & .content {
    padding: 16px;
    text-align: center;
    cursor: pointer;
    border: 1px solid white;
    transition: 0.8s;
    /* width: 18.5%;
    justify-content: center;
    margin: 10px;
    float: left;
    
    padding: 15px;
    transition: 0.8s;
    background-color: white; */
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
  }
  .color-options {
    width: 100%;
    display: none;
    background-color: #80808033;
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    align-items: center;
    bottom: 1px;

    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;

      :hover {
        display: block;
        transition: 0.3s;
        transform: scale(1.1);
        border: 2px solid white;
      }
    }
  }
  .discount-info {
    color: #f30;
    text-align: right;
  }
  .image-container {
    position: relative;
  }
  .content:hover {
    border: 1px solid #80808061;

    transform: scale(1.1);
    transform: 0.6;
  }
  .title {
    margin: 0;
    display: block;
    text-align: left;
    font-size: 14px;
    line-height: 1.7em;
    padding-bottom: 5px;
    padding-left: 0;
    color: #06c;
    min-height: 70px;
    --max-lines: 2;
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
    width: 20%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Card = (props: any) => {
  const { product } = props;
  console.log(product);
  const [priceCalculator, setPriceCalculator] = useState({
    current_price: null,
    price: null,
    available_stock: null,
  });

  const discountedPrice = (
    variant: any,
    discount: number,
    discount_type: string
  ) => {
    let current_price = variant.price;
    if (discount && discount > 0) {
      if (discount_type == "percent") {
        current_price = current_price - (variant.price * discount) / 100;
      } else {
        current_price = current_price - discount;
      }
    }
    return current_price;
  };
  //discountedPrice(product.variant[0], product.discount, product.discount_type);

  return (
    <CardContainer>
      <div className="content">
        <div className="image-container">
          <img src={product.cover_image} alt={product.title} />
          <div className="color-options">
            {product.variant.map((variant: any) => (
              <div
                key={variant.id}
                color={variant.code}
                style={{ background: variant.code }}
              ></div>
            ))}
          </div>
        </div>

        <div className="price-box">
          <div className="current-price">
            Rs.
            {discountedPrice(
              product.variant[0],
              product.discount,
              product.discount_type
            )}
          </div>
          {product.discount && (
            <small className="discount-price">
              <s>Rs.{product.variant[0].price}</s>
            </small>
          )}

          {product.discount && (
            <small className="discount-info">
              {"-"}
              {product.discount}
              {product.discount_type == "percent" ? "% Off" : " Rs Off"}{" "}
            </small>
          )}
        </div>
        <h3 className="title">{product.title}</h3>

        <div className="action">
          <button className="btn">add to cart</button>
        </div>
      </div>
    </CardContainer>
  );
};
export default Card;
