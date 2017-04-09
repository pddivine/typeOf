# typeOf
A library that intuitively identifies a variable's type and return the cooresponding type constructor or special value.

## Features
Returns intuitive type of a variable. For example, the native 'typeof' function will return 'object' when detecting the type of an array variable. This typeOf library would return the native Array object constructor in this case.

## TLDR;
```javascript
const typeOf = require('typeof');

const tests = [
  '',
  1,
  {},
  [],
  true,
  function x () {},
  null,
  undefined
];

// Using 'asString: true' option.
tests.forEach(v => console.log(typeOf(v, { asString: true })));

/** PRINTS
* 'string'
* 'number'
* 'object'
* 'array'
* 'boolean'
* 'function'
* 'null'
* 'undefined'
*/

// Normal, without config option.
tests.forEach(v => console.log(typeOf(v)));

/** PRINTS
* String constructor
* Number constructor
* Object constructor
* Array constructor
* Boolean constructor
* Function constructor
* null
* undefined
*/
```

## Variance From Native 'typeof'
The native 'typeof' function has these two correct, but unintuitive, responses.

| Input Value Type | Return Value              |
| ---------------- | ------------------------- |
| Array            | String Value 'object'     |
| Null             | String Value 'object'     |

The native 'typeof' function also returns a string response for the type. The typeOf library will instead return the cooresponding constructor or special value to the identified input type.

## TypeOf Library Evaluation of Type
| Input Value Type | Return Value            |
| ---------------- | ----------------------- |
| Array            | Array Constructor       |
| Boolean          | Boolean Constructor     |
| Function         | Function Constructor    |
| Null             | Special Value Null      |
| Number           | Number Constructor      |
| Object           | Object Constructor      |
| String           | String Constructor      |
| Symbol           | Symbol Constructor      |
| Undefined        | Special Value Undefined |

## Evaluating a Constructor Returns Itself
| Input Constructor | Return Value            |
| ----------------- | ----------------------- |
| Array             | Itself                  |
| Boolean           | Itself                  |
| Function          | Itself                  |
| Number            | Itself                  |
| Object            | Itself                  |
| String            | Itself                  |
| Symbol            | Itself                  |

## Evaluating a Special Value Returns Itself
| Special Value     | Return Value            |
| ----------------- | ----------------------- |
| Null              | Itself                  |
| Undefined         | Itself                  |

