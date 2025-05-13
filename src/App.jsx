import { useState } from 'react';
import PasswordGate from './components/bdayPassword';
import BirthdayInvite from './components/birthdayInvite';
import './styles.css';

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="app">
      {!unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <BirthdayInvite />
      )}
    </div>
  );
}

export default App;
