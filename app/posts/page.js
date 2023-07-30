import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await res.json();
  return (
    <div>
      <h1>post page</h1>
      <br />
      <ul>
        {postData ? postData.map((post) => <Link href={`posts/${post.id}`}><li key={post.title}>{post.title}</li></Link> ) : "no posts"}
      </ul>
    </div>
  );
}