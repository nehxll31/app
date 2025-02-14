import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons/css/tachyons.min.css';
import Card from './components/Card';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

reportWebVitals();
