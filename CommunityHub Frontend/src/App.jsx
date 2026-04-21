import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import About from './pages/About'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {
  const { data: apiPosts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [localPosts, setLocalPosts] = useState([]);

  const allPosts = [
    ...localPosts,
    ...(apiPosts?.slice(0, 20).map(p => ({ ...p, likes: 0 })) || [])
  ];

  const handleAddPost = (post) => setLocalPosts(prev => [post, ...prev]);

  const handleLike = (id) => {
    setLocalPosts(prev => prev.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleDelete = (id) => {
    setLocalPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home posts={allPosts} onLike={handleLike} onDelete={handleDelete} />} />
        <Route path="posts" element={<Posts posts={allPosts} onLike={handleLike} onDelete={handleDelete} loading={loading} error={error} />} />
        <Route path="posts/:postId" element={<PostDetail localPosts={localPosts} />} />
        <Route path="create" element={<CreatePost onAddPost={handleAddPost} />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App