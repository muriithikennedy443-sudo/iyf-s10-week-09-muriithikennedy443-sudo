function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body?.slice(0, 100)}...</p>
    </article>
  );
}

export default PostCard;