import User from '../components/User';

export default function HomePage() {
  return (
    <div>
      <h2> new time!!</h2>
      <User />
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  return {
    props: {
      data: {},
    }, // will be passed to the page component as props
  };
}
