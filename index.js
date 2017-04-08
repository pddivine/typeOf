module.exports = typeOf;

/**
 * Determine an intuitive response when querying a variable's type.
 * 
 * @param {any} val
 * @returns {String} An intuitive determination of a variable's type.
 */
function typeOf (val) {
  // Handle exceptions to typeof
  if (val === null) { return 'null'; }
  if (Array.isArray(val)) { return 'array'; }

  // Handle constructors
  switch (val) {
    case Array    : return 'array';
    case Boolean  : return 'boolean';
    case Function : return 'function';
    case Number   : return 'number';
    case Object   : return 'object';
    case String   : return 'string';
    case Symbol   : return 'symbol';
  }
  
  // typeof
  return typeof val;
}