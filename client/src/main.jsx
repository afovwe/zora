import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // Use ReactDOM for React 17
import App from './App.jsx';
import './index.css';

// Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
