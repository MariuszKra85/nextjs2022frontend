import User from '../components/User';

export default function HomePage() {
  console.log(data);
  return (
    <div>
      <h1>Home page</h1>
      <User />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
