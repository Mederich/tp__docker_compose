import { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('...');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      <h1>TP Docker Compose</h1>
      <p>Backend status: <strong>{status}</strong></p>
    </div>
  );
}
