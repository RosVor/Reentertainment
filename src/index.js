import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='goit-react-hw-05-movies'>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>
);