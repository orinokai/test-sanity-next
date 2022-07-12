export default function FourOhFour() {
  return (
    <>
      <h1>Custom 404 - Page Not Found</h1>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: "blah",
    },
    revalidate: 10, // In seconds
  };
}
