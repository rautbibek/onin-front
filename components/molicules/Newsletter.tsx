import styled from "styled-components";
const NewsLetterContainer = styled.div`
  min-height: 250px;
  border-top: 1px solid #0600004f;
  border-bottom: 1px solid #0600004f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  & .newsletter-info {
    h1 {
      font-weight: 700;
      color: rgb(0 0 0);
    }
    p {
      color: grey;
    }
  }
  & .newsletter-form {
    display: flex;
    border: 1px solid grey;
    .newsletter-input {
      height: 50px;
      min-width: 500px;
      border: 1px solid #0600004f;
      border: none;
    }
    .newsletter-btn {
      height: 50px;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      background-color: #fcb800;
      cursor: pointer;
      color: black;
      border: none;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;

    & .newsletter-form {
      display: none;
    }
  }
`;
const Newsletter = () => {
  return (
    <NewsLetterContainer className="newsletter">
      <div className="newsletter-info">
        <h1>Newsletter</h1>
        <p>Subcribe to get information about products and coupons</p>
      </div>
      <div className="newsletter-form">
        <input className="newsletter-input" type="text" />
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </NewsLetterContainer>
  );
};
export default Newsletter;
