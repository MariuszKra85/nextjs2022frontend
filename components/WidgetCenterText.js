import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  padding: 3rem 1rem 5rem;
  background: rgba(40, 40, 40, 0.8);
  h2,
  h4 {
    margin: 0;
    font-size: 2.6rem;
  }
  h4 {
    font-size: 2rem;
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
