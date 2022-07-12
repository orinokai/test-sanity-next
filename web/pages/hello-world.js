const Post = ({ post, time }) => {
  return (
    <article>
      <h1>Just Hello World</h1>
      <p>Rendered at {time} </p>
    </article>
  );
};

export async function getStaticProps(context) {
  const time = new Date().toLocaleTimeString();
  return {
    props: {
      time,
    },
    revalidate: 180,
  };
}

export default Post;
