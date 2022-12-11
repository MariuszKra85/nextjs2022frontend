import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  padding: 3rem 2rem 5rem;
  background: rgba(30, 30, 40, 0.8);
  h2,
  h4 {
    text-align: center;
    margin: 0;
    font-size: 2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
`;
export default function WidgetCenterText({ firstLine, secondLine }) {
  return (
    <Wrapper>
      <h4>{firstLine}</h4>
      <h2>{secondLine}</h2>
    </Wrapper>
  );
}
