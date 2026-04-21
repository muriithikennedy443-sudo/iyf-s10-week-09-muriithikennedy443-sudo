import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostDetail({ localPosts }) {
  const { postId } = useParams();
  const localPost = localPosts?.find(p => p.id === Number(postId));
  const { data: apiPost, loading } = useFetch(
    localPost ? null : `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = localPost || apiPost;

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (!post) return <p className="text-center py-8">Post not found.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/posts" className="text-blue-600 hover:underline mb-4 block">← Back to Posts</Link>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          By {post.author || 'Anonymous'} • {post.date || ''}
        </p>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetail;