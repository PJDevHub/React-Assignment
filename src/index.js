import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Route components
import './index.css';
import App from './App';
import App1 from './app1';
import App2 from './app2';
import App3 from './app3';
import App4 from './app4';
import App5 from './app5';
import App6 from './app6';
import App7 from './app7';
import App8 from './app8';
import App9 from './app9';
import App10 from './app10';
import App11 from './app11';
import App12 from './app12';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        {/* Define routes for each app */}
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/app4" element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
        <Route path="/app6" element={<App6 />} />
        <Route path="/app7" element={<App7 />} />
        <Route path="/app8" element={<App8 />} />
        <Route path="/app9" element={<App9 />} />
        <Route path="/app10" element={<App10 />} />
        <Route path="/app11" element={<App11 />} />
        <Route path="/app12" element={<App12 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
