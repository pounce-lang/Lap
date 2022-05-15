import React from 'react';
import PounceCat from './PounceCat';

export const Chat = () => {
  return (
    <div className="Feature-parent">
      <div className="Feature-child double-wide">
        <h3>type-of</h3>
        <p>
          basic Pounce type introspection
        </p>
        <PounceCat pounceCode="5 type-of" ></PounceCat>
      </div>
    </div>
  );
};