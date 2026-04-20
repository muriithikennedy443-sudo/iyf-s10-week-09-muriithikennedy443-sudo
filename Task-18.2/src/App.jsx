import { Routes, Route } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import StyledButton from './components/StyledButton'
import TailwindCard from './components/TailwindCard'
import TailwindButton from './components/TailwindButton'
import './App.css'

function Task18Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Task 18.2: Styling React</h1>

      <h2 className="text-2xl font-semibold mb-4">CSS Modules</h2>
      <StyledButton variant="primary">Primary</StyledButton>
      <StyledButton variant="secondary">Secondary</StyledButton>
      <StyledButton variant="danger">Danger</StyledButton>

      <h2 className="text-2xl font-semibold my-4">Tailwind CSS</h2>
      <TailwindCard title="Welcome Card">
        <p>This card is styled with Tailwind CSS!</p>
      </TailwindCard>
      <TailwindButton variant="primary">Primary</TailwindButton>
      <TailwindButton variant="secondary">Secondary</TailwindButton>
      <TailwindButton variant="danger">Danger</TailwindButton>
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