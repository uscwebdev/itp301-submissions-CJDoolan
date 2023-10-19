import React from 'react';
import All from './Items.js';
import { createRoot } from 'react-dom/client';

import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="body">
      <header>Acme Corporation </header>
      <h1> Shopping Cart </h1>

     <All />

      <footer>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/ACME-logo.png"
          alt="ACME Corp."
          className="logo"
        />
        <p id="copy"> © 1996-2023, Amazon.com, Inc. or its affiliates </p>
      </footer>
    </div>
  </React.StrictMode>
);

var price = parseInt(price);
