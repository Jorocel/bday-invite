import { useState } from 'react';

const PasswordGate = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password.toLowerCase() === 'jorocel') {
      onUnlock();
    } else {
      setError('❌ Incorrect password. Try again!');
    }
  };

  return (
    <div className="card">
      <h1>🎉 You're Invited! 🎂</h1>
      <p>Please enter the secret password to open your invitation:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit}>Unlock</button>
      <p className="error">{error}</p>
    </div>
  );
};

export default PasswordGate;
