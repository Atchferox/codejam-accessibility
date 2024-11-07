import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme/tokens.scss';
import Page from '.';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
