import React from 'react';
import { useState } from 'react';
import CountButton from './CountButton.js';

export default function Items(prop) {
  return (
    <div className="cartItem">
      <img src={prop.src} alt={prop.caption} className="items" />
      <div className="description">
        <p className="productName"> {prop.product} </p>
        <p className="details"> {prop.description}</p>
        <p>
          <strong> Price: </strong> ${prop.price}
        </p>
        <CountButton />
      </div>
    </div>
  );
}
