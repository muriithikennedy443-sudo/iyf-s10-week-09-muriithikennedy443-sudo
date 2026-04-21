import PostCard from './PostCard';

function PostList({ posts, onLike, onDelete, loading, error }) {
  if (loading) return <p className="text-center py-8">Loading posts...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;
  if (!posts?.length) return <p className="text-center py-8">No posts found.</p>;

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;