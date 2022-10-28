import { useState } from 'react';
import styled from 'styled-components';
import { Burger, Menu } from './Burger';

const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  color: white;
  display: flex;
  justify-content: left;
  flex-direction: column;
  h1,
  h2 {
    position: relative;
    padding: 7% 0 0 10px;
    text-align: left;
    font-size: 3.2rem;
    letter-spacing: 0px;
    line-height: 28px;
    text-shadow: 3px 4px 10px #ff3333;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    line-height: 20px;
    padding-top: 0;
    font-size: 2rem;
  }
  img {
    position: fixed;
    max-height: 80vh;
    max-width: 550px;
    width: 100%;
    opacity: 0.25;
    bottom: 0;
    z-index: -1;
  }
`;

export default function Heading() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <h1>Salsa Freedom</h1>
      <h2>Manchester</h2>
      <img
        src="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        alt="background"
      />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
