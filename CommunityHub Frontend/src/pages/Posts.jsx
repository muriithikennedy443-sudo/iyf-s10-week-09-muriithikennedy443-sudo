import { useState } from 'react';
import PostList from '../components/Post/PostList';
import Sidebar from '../components/Layout/Sidebar';

function Posts({ posts, onLike, onDelete, loading, error }) {
  const [search, setSearch] = useState('');

  const filtered = posts?.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">All Posts</h1>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍 Search posts..."
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-500 text-sm mb-4">{filtered.length} posts found</p>
        <PostList posts={filtered} onLike={onLike} onDelete={onDelete} loading={loading} error={error} />
      </div>
      <Sidebar />
    </div>
  );
}

export default Posts;