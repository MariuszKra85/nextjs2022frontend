import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  width: 80%;
  border: none;
  background-color: var(--red);
  color: var(--offWhite);
  margin: 10px;
  border-radius: 20px;
  a {
    color: var(--offWhite);
  }
  @media (min-width: 700px) {
    max-width: 30%;
  }
`;

export default function LevelButton({ level, href }) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        console.log(`click ${level}`);
      }}
    >
      <Link href={href}>{level}</Link>
    </StyledButton>
  );
}
