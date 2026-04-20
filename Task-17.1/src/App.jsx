import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import CounterEffect from './components/CounterEffect'
import WindowSize from './components/WindowSize'
import ThemeToggle from './components/ThemeToggle'
import UserProfile from './components/UserProfile'

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <Layout>
      <h1>Task 17.1: useEffect Hook</h1>
      <h2>Counter with Effects</h2>
      <CounterEffect />
      <h2>Window Size</h2>
      <WindowSize />
      <h2>Theme Toggle</h2>
      <ThemeToggle />
      <h2>User Profile (Fetch)</h2>
      <UserProfile userId={userId} />
      <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>Switch User</button>
    </Layout>
  )
}

export default App