import { useState, useEffect } from 'react';

function CounterEffect() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log('Effect ran! Count is:', count);
  });

  // Runs only on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Cleanup function
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log('Cleaned up!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterEffect;