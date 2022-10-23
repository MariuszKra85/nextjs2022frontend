import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: var(--red);
  color: var(--offWhite);
  margin: 5px;
  border-radius: 20px;
  a {
    color: var(--offWhite);
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
