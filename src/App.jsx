import { useState } from 'react';
import './App.scss';

function App() {
  const [toasts, setToasts] = useState([]);
  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
  ];
  const types = ['info', 'success', 'error'];

  const getRandomElement = (el) => {
    return el[Math.floor(Math.random() * el.length)];
  };

  const handleClick = () => {
    setToasts([
      ...toasts,
      { message: getRandomElement(messages), type: getRandomElement(types) },
    ]);

    setTimeout(() => {
      setToasts((prev) =>
        [...prev].filter((toast) => toast !== toasts[toasts.length - 1])
      );

      setTimeout(() => {
        setToasts([]);
      }, 2000);
    }, 3000);
  };

  return (
    <div className="App">
      <div className="toasts">
        {toasts.length > 0 &&
          toasts.map((toast, index) => (
            <div key={index} className={`toast ${toast.type}`}>
              {toast.message}
            </div>
          ))}
      </div>
      <button className="btn" onClick={handleClick}>
        Show Notification
      </button>
    </div>
  );
}

export default App;
