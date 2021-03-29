import Link from "next/link";
const NOTION_BLOG_ID = 'd1435f8f15c1407eb67c264b45ee2ef9'
export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}
export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    },
  };
}
function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link href="/[slug]" as={`/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}
export default HomePage
