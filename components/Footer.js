import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0rem 1rem 6rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  h2 {
    font-size: 4rem;
    color: var(--offWhite);
    padding: 0;
    padding-top: 2rem;
    margin: 0;
  }
  h3 {
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
  }
  h4 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  a {
    display: flex;
    flex-direction: column;
    text-decoration: underline rgba(0, 0, 0, 0);
    width: fit-content;
    ::after {
      transition: all 0.3s;
      content: ' ';
      width: 0px;
      height: 1px;
      background: #999;
    }
  }

  a:hover {
    &:after {
      width: 150px;
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  img {
    margin: 0.8rem;
    width: 50px;
    height: 50px;
    padding: 0.4rem;
    border: 1px solid #404040;
    transition: all 0.6s;
    &:hover {
      height: 55px;
      width: 55px;
      border: 1px solid #909090;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <h2>Salsa Manchester</h2>
      <h3>Dance Classes, Lessons, Party, Events | Salsa Freedom</h3>
      <p>
        The Salsa Freedom dance school has run classes in Manchester since April
        2009. Visit us today and join the fun with us.{' '}
      </p>

      <h4>OFFICE</h4>
      <p>CUBA CAFE 43 PORT STREET , OFF PICCADILLY, MANCHESTER M1 2EQ</p>
      <a href="mailto: jordan-dance@gmx.com">jordan-dance@gmx.com</a>
      <h4>+44 7766 111694</h4>
      <h4>LINKS</h4>
      <h4>GET IN TOUCH</h4>
      <SocialWrapper>
        <img src="/static/fb.png" alt="facebook" />
        <img
          src="/static/instagram.png"
          alt="facebook"
          width="40px"
          height="40px"
        />
      </SocialWrapper>
      <div>
        <h5>Salsa Manchester© 2022. All Rights Reserved.</h5>
      </div>
    </Wrapper>
  );
}
