import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import { useUser } from '../lib/useUser';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

const ButtonStyled = styled.button`
  font-size: 1.5rem;
  padding: 2rem 0 0 2rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s linear;
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover {
    color: #801010;
  }
`;

export default function Logout({ toggleOpen }) {
  const [signOut] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const { userState, loginUser } = useUser();

  function handleSignOut() {
    signOut();
    loginUser(null);
    toggleOpen(false);
    Router.push({
      pathname: `/`,
    });
  }
  console.log(userState);
  return userState?.name !== null ? (
    <ButtonStyled type="button" onClick={() => handleSignOut()}>
      Sign Out
    </ButtonStyled>
  ) : null;
}
