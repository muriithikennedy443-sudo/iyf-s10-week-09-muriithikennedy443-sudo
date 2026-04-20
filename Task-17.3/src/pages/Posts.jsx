import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => { setPosts(data.slice(0, 10)); setLoading(false); });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <Link to={`/posts/${post.id}`}>Read more →</Link>
        </article>
      ))}
    </div>
  );
}
export default Posts;