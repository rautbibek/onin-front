import { Col, Row, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Rate } from "antd";
import pluralize from "pluralize";

import { getProductDetail } from "../../services/product";
import { getProductReview } from "../../services/review";
import { useEffect, useState } from "react";
const ProductDetailContainer = styled.div`
  padding: 20px;
  .stock_and_sku {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 500;
    .in_stock {
      color: green;
    }
    .out_of_stock {
      color: red;
    }
    .sku {
      color: green;
    }
  }
`;
const Detail = () => {
  const router = useRouter();
  const [avg_rating, setAvgRating] = useState(0);
  const [total_rating, setTotalRating] = useState(0);
  const [variant, setVariant] = useState({});

  const { data: product_detail } = useQuery(
    ["productDetail", router.query.id],
    () => getProductDetail(router.query.id as string),
    {
      enabled: !!router.query.id,
    }
  );
  const { data: review, isLoading } = useQuery(
    ["productReview", router.query.id],
    () => getProductReview(router.query.id as string),
    {
      enabled: !!router.query.id,
      onSuccess: (res) => {
        const rating = res?.data?.rating;
        const total_system_reating: any = Object.values(rating).reduce(
          (a: any, b: any) => a + b
        );
        const total_rating: any =
          1 * rating?.ONE +
          2 * rating?.TWO +
          3 * rating?.THREE +
          4 * rating?.FOUR +
          5 * rating?.FIVE;
        setTotalRating(total_system_reating);
        setAvgRating(total_rating / total_system_reating);
      },
    }
  );

  const product = product_detail?.data.data;
  useEffect(() => {
    setVariant(product?.variant[0]);
  }, [variant, product]);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  const copyToClipBoard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
  };
  return (
    <ProductDetailContainer>
      <Row gutter={16}>
        <Col span={10}>
          <ImageGallery
            thumbnailPosition="bottom"
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            disableThumbnailSwipe={true}
            showPlayButton={false}
            autoPlay={false}
            thumbnailHeight="60px"
            thumbnailWidth="60px"
            thumbnailLoading="lazy"
            lazyLoad={false}
            items={images}
          />
        </Col>
        <Col span={12}>
          <h2>{product?.title}</h2>
          <Rate disabled defaultValue={0} value={avg_rating} allowHalf />(
          {total_rating} {pluralize(" review", total_rating)})
          <section className="product_information">
            <div className="stock_and_sku">
              <span
                className={variant?.stock > 0 ? "in_stock" : "out_of_stock"}
              >
                {variant?.stock > 0 ? "In Stock" : "Out Of Stock"}
              </span>

              <span>
                SKU :{" "}
                <span className="sku">
                  {variant?.sku}
                  <Tooltip title="copy to clipboard" color="green">
                    &nbsp;
                    <CopyOutlined
                      onClick={() => copyToClipBoard(variant?.sku)}
                    />
                  </Tooltip>
                </span>
              </span>
            </div>
            <span className="discounted_price">Rs.{variant?.price}</span>
            <span className="price">Rs.{variant?.price}</span>
            <span dangerouslySetInnerHTML={{ __html: product?.short_desc }} />
          </section>
        </Col>
      </Row>
    </ProductDetailContainer>
  );
};
export default Detail;
