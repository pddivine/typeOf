# typeOf
A library that intuitively identifies a variable's type.

## Features
Returns intuitive type of a variable. For example, the native 'typeof' function will return 'object' when detecting the type of a null variable. This typeOf library would return 'null' in this case.

## Native 'typeof' Exceptions Handled
* Array - Returns 'array', not 'object'
* Null - Returns 'null', not 'object'

## Treating Constructors as of the Type they Create
* Array    - Returns 'array'
* Boolean  - Returns 'boolean'
* Function - Returns 'function'
* Number   - Returns 'number'
* String   - Returns 'string'
* Symbol   - Returns 'symbol'