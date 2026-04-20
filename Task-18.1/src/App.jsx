import { Routes, Route } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Settings from './components/Settings'
import Modal from './components/Modal'
import ContactForm from './components/ContactForm'
import './App.css'

function Task18Page() {
  return (
    <div>
      <h1>Task 18.1: Custom Hooks</h1>
      <h2>Settings (useLocalStorage)</h2>
      <Settings />
      <h2>Modal (useToggle)</h2>
      <Modal />
      <h2>Contact Form (useForm)</h2>
      <ContactForm />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="task18" element={<Task18Page />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App