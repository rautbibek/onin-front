import styled from "styled-components";
const FooterInfoWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px;
  min-height: 100px;
  div > h3 {
    font-weight: bold;
    margin-bottom: 20px;
  }
  span {
    font-size: 25px;
    color: #fcb800;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    color: grey;
  }

  a {
    color: grey;
    display: block;
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const FooterInfo = () => {
  return (
    <FooterInfoWrapper>
      <div>
        <h3>Contact Us</h3>
        <p>Call us 24/7</p>
        <span>9863756278</span>

        <p>502 New Design Str, Melbourne, Australia </p>

        <a href="mailto:contact@martfury.co">contact@martfury.co</a>
      </div>
      <div>
        <h3>Quick Links</h3>
        <a href="">Policy</a>
        <a href="">Term & Condition</a>
        <a href="">Shipping</a>
        <a href="">Return</a>
        <a href="">FAQs</a>
      </div>
      <div>
        <h3>Company</h3>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact us</a>
        <a href="">Affilate</a>
        <a href="">Career</a>
      </div>
      <div>
        <h3>Business</h3>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact us</a>
        <a href="">Affilate</a>
        <a href="">Career</a>
      </div>
    </FooterInfoWrapper>
  );
};
export default FooterInfo;
