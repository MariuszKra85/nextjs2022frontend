import styled from 'styled-components';

const Wrapper = styled.div`
  background: #212121;
  min-width: 330px;
  display: flex;
  margin: 3rem 1rem;
  padding: 3rem 2rem;
  justify-content: space-between;
  font-family: 'Bebas Neue';
  border-radius: 5px;
`;

export default function Classes({ el, name }) {
  console.log(el);
  return (
    <Wrapper>
      <p>{name}</p>
      <img src={el?.url} alt={el?.name} />
      <p>5pm - 6pm </p>
      <p> Salsa</p>
    </Wrapper>
  );
}
