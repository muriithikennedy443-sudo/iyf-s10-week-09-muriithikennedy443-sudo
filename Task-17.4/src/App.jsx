import { Routes, Route } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PostListWithStates from './components/PostListWithStates'
import './App.css'

function PostsPage() {
  return (
    <div>
      <h1>Task 17.4: Loading & Error States</h1>
      <PostListWithStates />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App