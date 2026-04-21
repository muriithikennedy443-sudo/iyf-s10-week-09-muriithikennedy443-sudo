import { Link } from 'react-router-dom';

function PostCard({ post, onLike, onDelete }) {
  return (
    <article className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">
        <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        {post.body?.slice(0, 120) || post.excerpt?.slice(0, 120)}...
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {post.author || 'Anonymous'} • {post.date || ''}</span>
        <div className="flex gap-2">
          {onLike && (
            <button onClick={() => onLike(post.id)} className="text-red-500 hover:text-red-700">
              ❤️ {post.likes || 0}
            </button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(post.id)} className="text-gray-400 hover:text-red-500">
              🗑️
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default PostCard;