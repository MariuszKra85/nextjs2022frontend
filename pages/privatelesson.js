import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ClassesView from '../components/ClassesView';
import Hero from '../components/Hero';
import PrivateClass from '../components/PrivateClass';
import WidgetCenterText from '../components/WidgetCenterText';

const PIC_QUERY = gql`
  query {
    allPicturesLibs(where: { name_contains: "private" }) {
      name
      url
    }
  }
`;

const Wrapper = styled.div`
  padding: 1rem 2rem 5rem;
  margin: 6rem 1rem;
  background-color: rgba(20, 20, 20, 0.7);
  max-width: 700px;
  p {
    text-align: center;
    font-size: 1.6rem;
    color: var(--offWhite);
  }
`;
const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 60%;

  @media (min-width: 1200px) {
    width: 100%;
    flex-direction: row;
  }
`;

export default function PrivateLesson() {
  const { data, error, loading } = useQuery(PIC_QUERY);
  if (loading) <h3>loading... </h3>;
  console.log(data);
  return (
    <StyledSection>
      <Hero pic={data?.allPicturesLibs[0]} text="PRIVATE DANCE PRACTICE" />
      <Wrapper>
        <h2>PRIVATE Class</h2>
        <p>
          Private dance lessons are the most effective method to rapidly achieve
          your dancing goals. With one-to-one attentiveness from your teacher
          your technique will be perfected. Private lessons are suitable for all
          levels, for example; beginners who want to learn the basics before
          attending group classes or socials, improvers who want to keep
          practised, or advanced dancers who wish to enhance their technique.
        </p>
        <p>
          Salsa Freedom offer the ultimate Hen-Do, so treat the beautiful
          Bride-to-be to the best Hen Party around! Catered to your specific
          requirements, the Salsa Freedom Hen party is an event never to be
          forgotten. Options include group salsa lesson, or learning a unique
          group choreography to a specific song that can be performed together.
          We are happy when you are, so do not hesitate to tell us exactly how
          you want it to be.
        </p>
        <p>
          Our exceptional private parties and performances are available at
          request.
        </p>
      </Wrapper>
      <WidgetCenterText
        firstLine="BEST SALSA CLASSES IN MANCHESTER"
        secondLine="WE OFFER VARIATY OF DANCE CLASSES"
      />
      <ClassWrapper>
        <PrivateClass number="1" link="/hendo" />

        <PrivateClass number="2" />

        <PrivateClass number="3" />
      </ClassWrapper>
      {/* <ClassesView /> */}
    </StyledSection>
  );
}
