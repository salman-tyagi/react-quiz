import React from 'react';
import reactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { QuizProvider } from './contexts/QuizContext';

reactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
