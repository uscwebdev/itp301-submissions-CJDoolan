import React from 'react';
import Items from './Items.js';
import { createRoot } from 'react-dom/client';

import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="body">
      <header>Acme Corporation </header>
      <h1> Shopping Cart </h1>

      <Items
        src="https://www.staynerd.com/wp-content/uploads/Looney-Tunes-armi-1-1.jpg"
        alt="rocket"
        product="Authentic Looney Tunes Popcaan Rocket"
        price="300"
      />

      <Items
        src="https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2019/06/14/elmerfudd-dynamitedance-600_vRsnOQR.jpg"
        alt="TNT"
        product="Looney Trouble TNT "
        description="(Trinitrotoluene)"
        price="40"
      />

      <Items
        src="https://i.pinimg.com/474x/e5/37/72/e537728b3ded97186b8fcbdf6540ac19.jpg"
        alt="Boulder"
        product="Dehydrated Boulders"
        description="Just Add Water!"
        price="87"
      />

      <Items
        src="https://i.pinimg.com/236x/da/f5/a5/daf5a51c5a6a4a8aed0c8d39faf779f7.jpg"
        alt="Grease"
        product="Axle Grease"
        description="Guaranteed Slippery"
        price="23"
      />

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
