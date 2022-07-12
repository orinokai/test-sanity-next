import client from "../client";

const Post = ({ post, time }) => {
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
      <p>Rendered at {time} </p>
    </article>
  );
};

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = "hello-world";
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  if (!post) {
    return {
      notFound: true,
    };
  }
  const time = new Date().toLocaleTimeString();
  return {
    props: {
      post,
      time,
    },
    revalidate: 180,
  };
}

export default Post;
