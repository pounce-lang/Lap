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
      <div className="Feature-child double-wide">
        <h3>The Four Forms of Judgment</h3>
        <p>
          <ol>
            <li>____ is a ____.
              <PounceCat pounceCode={`
5 Nat is-a
'5' Str is-a
Nat Type is-a

[[type-of] dip ==] 
[is-a] compose`} ></PounceCat>
            </li>
            <li>____ is the same ____ as ____.
              <PounceCat pounceCode={`
5 Nat 5 is-the-same-type-as
'5' Str '5' is-the-same-type-as
'a' Str 'B' is-the-same-type-as
Nat Type Nat is-the-same-type-as


[[type-of] dip2 type-of [dup] dip [==] dip2 == &&] 
[is-the-same-type-as] compose`} ></PounceCat>
            </li>
            <li>____ is a type.
              <PounceCat pounceCode={`
Nat is-a-type
5 is-a-type
'a' is-a-type
Type is-a-type


[type-of dup [Type ==] dip ] 
[is-a-type] compose
`} ></PounceCat>
            </li>
            <li>____ and ____ are the same type.
            <PounceCat pounceCode={`
5 Nat are-the-same-type
'5' '5' are-the-same-type
'a' 'B' are-the-same-type
Nat Type Nat are-the-same-type


[[type-of] dip2 type-of [dup] dip [==] dip2 == &&] 
[are-the-same-type] compose`} ></PounceCat>
            </li>
          </ol>
        </p>

      </div>
    </div>
  );
};