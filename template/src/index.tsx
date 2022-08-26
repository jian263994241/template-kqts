import './reset.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  ReactDOMClient.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  ReactDOMClient.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
