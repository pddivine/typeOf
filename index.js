module.exports = typeOf;

/**
 * Determine a variable's type.
 * 
 * @param {any} val
 * @returns {String} A variable's type.
 */
function typeOf (val) {
  // Handle exceptions to typeof
  if (val === null) { return 'null'; }
  if (Array.isArray(val)) { return 'array'; }
  // typeof
  return typeof val;
}