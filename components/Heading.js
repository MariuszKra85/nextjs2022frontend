import { useState } from 'react';
import styled from 'styled-components';
import { Burger, Menu } from './Burger';

const Wrapper = styled.section`
  width: 100vw;
  height: 80px;
  overflow-x: hidden;
  overflow-y: hidden;
  color: white;
  display: flex;
  justify-content: left;
  flex-direction: column;
  h1,
  h2 {
    padding: 25px 0 0 10px;
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

  @media (min-width: 560px) {
    img {
    }
  }
  @media (min-width: 1200px) {
    span {
      top: 25%;
      right: 35%;
      position: absolute;
      z-index: 99;
      h1 {
        font-size: 8.3rem;
        line-height: 9rem;
      }
      h2 {
        font-size: 5.4rem;
      }
    }
  }
`;

export default function Heading() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <span>
        <h1>Salsa Freedom</h1>
        <h2>Manchester</h2>
      </span>

      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
