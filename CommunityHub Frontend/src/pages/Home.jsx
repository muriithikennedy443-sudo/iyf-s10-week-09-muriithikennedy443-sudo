import { Link } from 'react-router-dom';
import PostList from '../components/Post/PostList';
import Sidebar from '../components/Layout/Sidebar';

function Home({ posts, onLike, onDelete }) {
  const recentPosts = posts?.slice(0, 3) || [];

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-6">
          <h1 className="text-4xl font-bold mb-2">Welcome to CommunityHub 🌐</h1>
          <p className="text-blue-100 mb-4">Share your thoughts and connect with others.</p>
          <Link to="/create" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-50">
            Create Post
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <PostList posts={recentPosts} onLike={onLike} onDelete={onDelete} />
        <Link to="/posts" className="text-blue-600 hover:underline">View all posts →</Link>
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;