import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './components/serviceWorkerRegistration'; // Import service worker registration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// Register the service worker for offline capabilities and better performance
serviceWorkerRegistration.register();
 
