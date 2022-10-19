import User from '../components/User';

export default function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <User />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: {},
    }, // will be passed to the page component as props
  };
}
