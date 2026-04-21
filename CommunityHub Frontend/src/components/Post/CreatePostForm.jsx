import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostForm({ onAddPost }) {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) { setError('Title is required'); return; }
    if (!formData.body.trim()) { setError('Content is required'); return; }
    onAddPost({
      id: Date.now(),
      title: formData.title,
      body: formData.body,
      author: 'muriithikennedy443-sudo',
      date: new Date().toLocaleDateString(),
      likes: 0
    });
    navigate('/posts');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Post title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Content *</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your post..."
            rows="6"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;