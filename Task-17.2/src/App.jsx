import './App.css'
import Layout from './components/Layout/Layout'
import ApiFetchPostList from './components/ApiFetchPostList'

function App() {
  return (
    <Layout>
      <h1>Task 17.2: Data Fetching in React</h1>
      <h2>Posts from API</h2>
      <ApiFetchPostList />
    </Layout>
  )
}

export default App