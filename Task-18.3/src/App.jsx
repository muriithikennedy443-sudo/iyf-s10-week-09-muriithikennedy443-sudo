import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { Button, Input, Card, Modal, Avatar } from './components/shared'
import './App.css'

function Task183Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Task 18.3: Component Library</h1>

      <Card title="Buttons">
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading={true}>Loading</Button>
          <Button disabled={true}>Disabled</Button>
        </div>
      </Card>

      <Card title="Input">
        <Input
          label="Your Name"
          name="name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          error="Invalid email address"
        />
      </Card>

      <Card title="Avatars">
        <div className="flex gap-4 items-center">
          <Avatar name="John Doe" size="small" />
          <Avatar name="Jane Smith" size="medium" />
          <Avatar name="Bob Lee" size="large" />
        </div>
      </Card>

      <Card title="Modal">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Hello from Modal!"
        >
          <p>This is the modal content!</p>
          <Button onClick={() => setIsModalOpen(false)} variant="danger">Close</Button>
        </Modal>
      </Card>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="task183" element={<Task183Page />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App