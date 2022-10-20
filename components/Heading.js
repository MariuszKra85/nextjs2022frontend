import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: relative;
    padding-top: 50px;
    text-align: center;
    font-size: 4.5rem;
    letter-spacing: 1px;
    text-shadow: 3px 4px 10px #ff3333;
    margin: 0;
  }
  img {
    position: absolute;
    width: 100%;
    opacity: 0.15;
    bottom: 0;
    z-index: -1;
  }
  img {
    max-height: 80vh;
    max-width: 550px;
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

export default function Heading() {
  // const [open, setOpen] = useState(false);
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);
  console.log(data);
  return (
    <Wrapper>
      <h1>
        Salsa Freedom <br />
        Manchester
      </h1>
      <img
        src="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        alt="background"
      />
      {/* <Burger open={open} setOpen={setOpen} /> */}
      {/* <Menu open={open} setOpen={setOpen} /> */}
    </Wrapper>
  );
}
