import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Heading from './Heading';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #600000;
    --black: #020202;
    --grey: #3A3A3A;
    --lightGrey: #d1d1d1;
    --offWhite: #ededed;
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
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    line-height:1.4;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0.5rem;
`;

export default function Page({ children }) {
  return (
    <>
      <Heading />
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
