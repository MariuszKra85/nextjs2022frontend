import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  transition: all 0.5s;
  display: inline-flex;
  text-transform: uppercase;
  border: 1px solid ${(red) => (red ? 'var(--red)' : 'var(--offWhite)')};
  padding: 1rem;
  background-color: ${(red) => (red ? 'var(--red)' : null)};
  color: var(--offWhite);
  &:hover {
    text-decoration: none;
    background-color: var(--offWhite);
    color: black;
  }
`;
function BookingLink({ link, name }) {
  return (
    <StyledLink href={link} target="_blank" rel="noreferrer">
      {name}
    </StyledLink>
  );
}

export default BookingLink;
