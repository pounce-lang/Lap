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
              <PounceCat
              preCode={`[[] depth [ cons] swap 1 - times true [&&] reduce] [all-true] compose`} 
              pounceCode={`
0 Nat is-a
5 Nat is-a
'5' Str is-a
Nat Type is-a
5 Neg is-a !
0 Str is-a !
Type Type is-a !
all-true

[[type-of] dip ==] 
[is-a] compose`} ></PounceCat>
            </li>
            <li>____ is the same ____ as ____.
              <PounceCat 
              preCode={`[[] depth [ cons] swap 1 - times true [&&] reduce] [all-true] compose`}  
              pounceCode={`
5 Nat 5 is-the-same-type-as
'5' Str '5' is-the-same-type-as
'a' Str 'B' is-the-same-type-as
Nat Type Nat is-the-same-type-as
all-true

[[type-of] dip2 type-of [dup] dip [==] dip2 == &&] 
[is-the-same-type-as] compose`} ></PounceCat>
            </li>
            <li>____ is a type.
              <PounceCat 
              preCode={`[[] depth [ cons] swap 1 - times true [&&] reduce] [all-true] compose`} 
              pounceCode={`
Nat is-a-type
Str is-a-type
5 is-a-type !
0 is-a-type !
'a' is-a-type !
Type is-a-type !
all-true

[type-of Type == ] 
[is-a-type] compose
`} ></PounceCat>
            </li>
            <li>____ and ____ are the same type.
            <PounceCat 
              preCode={`[[] depth [ cons] swap 1 - times true [&&] reduce] [all-true] compose`} 
              pounceCode={`
5 0 are-the-same-type
'5' '5' are-the-same-type
'a' 'B' are-the-same-type
Nat Nat are-the-same-type
Nat Str are-the-same-type
5 -3 are-the-same-type !
'5' 5 are-the-same-type !
Nat Type are-the-same-type !
all-true

[[type-of] dip type-of ==] 
[are-the-same-type] compose`} ></PounceCat>
            </li>
          </ol>
        </p>

      </div>
    </div>
  );
};