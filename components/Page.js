import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import Footer from './Footer';
import Heading from './Heading';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ComicSans';
    src: url('/static/ComicSansMS3.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bebas Neue';
    src: url('/static/BebasNeue-Regular.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  html {
    --red: #600000;
    --black: #020202;
    --grey: #3A3A3A;
    --lightGrey: #d1d1d1;
    --offWhite: #dedede;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
    background-color: var(--black);
    font-display: optional;
    color: var(--offWhite);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'ComicSans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    line-height:1.4;
    overflow-x: hidden;
  }
  a {
    font-size: 1.8rem;
    font-family: 'Bebas Neue';
    text-decoration: none;
    color: var(--offWhite);
    transition: all;
  }
  a:hover {
  }
  button {
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1,h2,h3,h4{
    font-family: 'ComicSans';
    font-weight: 100;
  }
  img{
    box-sizing: border-box;
    display: block;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80vh;
  max-width: 550px;
  margin: 0 auto;
  z-index: -99;
`;
const BgImage = styled(Image)`
  opacity: 0.25;
`;

export default function Page({ children }) {
  return (
    <>
      <Heading />
      <GlobalStyles />
      <InnerStyles>
        {children}
        <ImageWrapper>
          <BgImage
            layout="fill"
            src="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
            alt="background"
          />
        </ImageWrapper>
      </InnerStyles>
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
