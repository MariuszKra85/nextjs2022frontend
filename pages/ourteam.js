import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import Person from '../components/Person';

const PERSONS_QUERY = gql`
  query {
    allTeachersLibs {
      id
      name
      description
      photo
      role
      phone
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 0vh;
  @media (min-width: 1200px) {
    margin-top: 40vh;
  }
`;

function ourTeam() {
  const { data: persons, loading } = useQuery(PERSONS_QUERY);
  console.log(persons);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Wrapper>
      <h1>Our Team</h1>
      {persons.allTeachersLibs.map((person) => {
        console.log(person);
        return (
          <Person
            name={person.name}
            disc={person.description}
            photo={person.photo}
            key={person.id}
          />
        );
      })}
    </Wrapper>
  );
}

export default ourTeam;
