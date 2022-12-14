import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  background: rgba(22, 22, 30, 0.6);
  margin-bottom: 3rem;
  h2,
  h4 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.6rem;
  }
  a {
    font-size: 2rem;
    transform: translateX(-70px);
    transition: all 0.6s;
  }
  div {
    display: flex;
    overflow-x: hidden;
    align-items: center;
  }
  span {
    margin-left: 1rem;
    border-radius: 30px;
    width: 33px;
    padding: 1.1rem 0.7rem;
    border: 1px solid rgba(100, 100, 100, 0.6);
    content: url('/static/arrow.png');
    transition: all 0.6s;
    transform: translateX(-75px);
  }
  &:hover {
    a {
      transform: translateX(0);
    }
    span {
      border: 1px solid rgba(195, 20, 20, 1);
      transform: translateX(0);
    }
  }
  @media (min-width: 700px) {
    padding-right: 8rem;
    margin-left: 2rem;
    max-width: 400px;
  }
`;

export default function PrivateClass({ link, title, price }) {
  return (
    <Wrapper>
      <a href={link}>
        <h2>{title}</h2>
        <h4>£{price}</h4>
        <p>ARE YOU ORGANISING A HEN PARTY? WHY NOT TRY SALSA?</p>
        <div>
          <a href="/salsa/hendo">READ MORE</a>
          <span />
        </div>
      </a>
    </Wrapper>
  );
}
