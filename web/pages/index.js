const Index = ({ time }) => {
  return (
    <div>
      <p>Hello world!</p>
      <p>Rendered at {time} </p>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
  };
}
export default Index;
