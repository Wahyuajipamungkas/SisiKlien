import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InventoryProvider } from './Context/InsvetoriContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <InventoryProvider>
            <App />
        </InventoryProvider>
    </React.StrictMode>
);