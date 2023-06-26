import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import Flags from './components/Flags/Flags.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Flags />
  </React.StrictMode>,
);
