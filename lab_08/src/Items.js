import React from 'react';
import { useState } from 'react';
import CountButton from './CountButton.js';

//const subtotal = 0;

export default function All() {
  const [sub, setSub] = useState(0);

  const handleSubUpdate = (price) => {
    console.log('handleCountUpdate invoked');
    setSub(sub + price);
  };

  // const handleNegUpdate = (price) => {
  //   console.log('handleCountUpdate invoked');
  //   setSub(sub - price);
  // };

  const handleNegUpdate = (price) => {
    if (sub >= price) {
      setSub(sub - price);
    } else {
      setSub(sub);
    }
  };

  return (
    <div className="allProducts">
      <Items
        src="https://i.pinimg.com/736x/88/88/e5/8888e58779ba87a3f7480b9050368dde.jpg"
        alt="rocket"
        product="Authentic Looney Tunes Popcaan Rocket"
        price={300}
        parentEventHandler={handleSubUpdate}
        parentNegHandler={handleNegUpdate}
      />

      <Items
        src="https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2019/06/14/elmerfudd-dynamitedance-600_vRsnOQR.jpg"
        alt="TNT"
        product="Looney Trouble TNT "
        description="(Trinitrotoluene)"
        price={40}
        parentEventHandler={handleSubUpdate}
        parentNegHandler={handleNegUpdate}
      />

      <Items
        src="https://i.pinimg.com/474x/e5/37/72/e537728b3ded97186b8fcbdf6540ac19.jpg"
        alt="Boulder"
        product="Dehydrated Boulders"
        description="Just Add Water!"
        price={87}
        parentEventHandler={handleSubUpdate}
        parentNegHandler={handleNegUpdate}
      />

      <Items
        src="https://i.pinimg.com/236x/da/f5/a5/daf5a51c5a6a4a8aed0c8d39faf779f7.jpg"
        alt="Grease"
        product="Axle Grease"
        description="Guaranteed Slippery"
        price={23}
        parentEventHandler={handleSubUpdate}
        parentNegHandler={handleNegUpdate}
      />

      <p> Subtotal: $ {sub}</p>
    </div>
  );
}

function Items(prop) {
  return (
    <div className="cartItem">
      <img src={prop.src} alt={prop.caption} className="items" />
      <div className="description">
        <p className="productName"> {prop.product} </p>
        <p className="details"> {prop.description}</p>
        <p>
          <strong> Price: </strong> $ {prop.price}
        </p>

        <CountButton
          price={prop.price}
          grandEventHandler={prop.parentEventHandler}
          grandNegHandler={prop.parentNegHandler}
        />
      </div>
    </div>
  );
}

function CountButton(prop) {
  const [count, setCount] = useState(0);

  function handlePosIncrementCount() {
    setCount(count + 1);
  }

  function handleNegIncrementCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  return (
    <div id="count-section" className="container mt-4">
      <p>
        <button
          id="btn-click"
          onClick={() => {
            handleNegIncrementCount();
            count > 0 ? prop.grandNegHandler(prop.price) : '';
          }}
        >
          -
        </button>
        {count}
        <button
          id="btn-click"
          onClick={() => {
            handlePosIncrementCount();
            prop.grandEventHandler(prop.price);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}
