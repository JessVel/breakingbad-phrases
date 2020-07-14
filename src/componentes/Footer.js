import React from "react";
import Emoji from "a11y-react-emoji";
import styled from "@emotion/styled";

const Footer = styled.footer`
  background-color: #000;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #fff;
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
`;

const HeartFooter = () => {
  return (
    <Footer>
      Developed with <Emoji symbol="💕" label="love" /> by Jesica Velazquez
    </Footer>
  );
};
export default HeartFooter;
