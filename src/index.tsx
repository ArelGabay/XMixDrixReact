import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, for styles
import App from './App';

// Use TypeScript to ensure the root element is not null
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);