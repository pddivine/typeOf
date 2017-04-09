# typeOf
A library that intuitively identifies a variable's type and return the cooresponding type constructor or special value.

## Features
Returns intuitive type of a variable. For example, the native 'typeof' function will return 'object' when detecting the type of an array variable. This typeOf library would return the native Array object constructor in this case.

## Variance From Native 'typeof'
The native 'typeof' function has these two correct, but unintuitive, responses.

| Input Value Type | Return Value |
| ---------------- | ------------ |
| Array            | 'object'     |
| Null             | 'object'     |

The native 'typeof' function also returns a string response for the type. The typeOf library will instead return the cooresponding constructor or special value to the identified input type.

## TypeOf Library Evaluation of Type
| Input Value Type | Return Value            |
| ---------------- | ----------------------- |
| Array            | Array constructor       |
| Boolean          | Boolean constructor     |
| Function         | Function constructor    |
| Number           | Number constructor      |
| Object           | Object constructor      |
| String           | String constructor      |
| Symbol           | Symbol constructor      |
| null             | Special value null      |
| undefined        | Special value undefined |

## Evaluating a Constructor or Specaial Value Returns Itself
| Input Constructor | Return Value            |
| ----------------- | ----------------------- |
| Array             | Itself                  |
| Boolean           | Itself                  |
| Function          | Itself                  |
| Number            | Itself                  |
| Object            | Itself                  |
| String            | Itself                  |
| Symbol            | Itself                  |

