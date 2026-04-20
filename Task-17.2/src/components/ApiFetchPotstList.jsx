import useFetch from '../hooks/useFetch';

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
    </article>
  );
}

function ApiFetchPostList() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post-list">
      {posts.slice(0, 10).map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ApiFetchPostList;