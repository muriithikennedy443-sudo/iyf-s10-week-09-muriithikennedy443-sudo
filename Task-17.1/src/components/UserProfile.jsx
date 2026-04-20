import { useState, useEffect } from 'react';

function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <div><p>Name: {user.name}</p><p>Email: {user.email}</p></div>;
}

export default UserProfile;