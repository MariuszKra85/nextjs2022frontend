import Link from 'next/link';
import styled from 'styled-components';
import Logout from './Logout';

const StyledBurger = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.2rem;
  flex-direction: column;
  justify-content: space-around;
  width: 4.5rem;
  height: 4.5rem;
  background: ${({ open }) => (open ? 'transparent' : 'rgba(0, 0, 0, 0.7)')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 99;
  display: none;

  @media only screen and (max-width: 740px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: 0.4rem;
    background: ${({ open }) => (open ? '#313131' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      width: 2.2rem;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (max-width: 576px) {
    }
  }
`;
const StyledMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  height: 110vh;
  text-align: left;
  position: fixed;
  top: 1.7rem;
  right: 2rem;
  transition: transform 0.5s ease-in-out;
  z-index: 98;

  button {
    background-color: transparent;
    display: flex;
    border: none;
    a {
      width: 100%;
      text-decoration: none;
      text-transform: uppercase;
    }
    button {
      width: 100%;
    }
  }

  @media (max-width: 740px) {
    top: 0;
    left: 0;
    width: 18rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    display: flex;
    background: #effffa;
  }

  @media (max-width: 576px) {
    width: 110%;

    background-color: rgba(225, 225, 225, 0.9);
  }

  a {
    font-size: 2.3rem;
    padding: 2rem 0 0 2rem;
    font-weight: 900;
    letter-spacing: 0.5rem;

    text-decoration: none;
    transition: color 0.5s linear;
    @media (max-width: 700px) {
      color: #0d0c1d;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #801010;
    }
  }
`;

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

const Menu = ({ open, setOpen, windowSize }) => {
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <StyledMenu open={open}>
      {windowSize?.width < 770 ? (
        <>
          {' '}
          <a href="#top" onClick={() => setOpen(!open)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(!open)}>
            About
          </a>
          <a href="#portfolio" onClick={() => setOpen(!open)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(!open)}>
            Contact
          </a>
        </>
      ) : (
        <>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/">Home</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/privatelesson">Privat Lesson</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/danceclass">Dance Classes</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/privatehire">Private Hire</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/aboutus">About Us</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/ourteam">Our Team</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/salsaapp">Salsa Freedom App</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/shop">Shop</Link>
          </button>
          <button type="button" onClick={() => handleOpen()}>
            <Link href="/contact">Contact</Link>
          </button>
          <Logout toggleOpen={setOpen} />
        </>
      )}
    </StyledMenu>
  );
};

export { Burger, Menu };
