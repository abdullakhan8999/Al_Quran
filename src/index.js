import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkThemeProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DarkThemeProvider>
    <App />
  </DarkThemeProvider>
);
