import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from "antd";
import App from './App.tsx'
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
        algorithm: theme.defaultAlgorithm,
    }}><App /></ConfigProvider>
  </React.StrictMode>,
)
