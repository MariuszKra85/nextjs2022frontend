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
