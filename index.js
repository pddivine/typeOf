module.exports = typeOf;

const TYPE_MAP = {
  array: Array,
  boolean: Boolean,
  function: Function,
  null: null,
  number: Number,
  object: Object,
  string: String,
  symbol: Symbol,
  undefined: undefined,
};
const CONSTRUCTOR_LIST = [Array, Boolean, Function, Number, Object, String, Symbol];

/**
 * Determine an intuitive response when querying a variable's type.
 * 
 * @param {any} val
 * @returns {String} An intuitive determination of a variable's type.
 */
function typeOf (val) {
  // Handle constructors
  if (CONSTRUCTOR_LIST.includes(val)) { return val; }

  // Handle exceptions to typeof
  if (val === null) { return TYPE_MAP.null; }
  if (Array.isArray(val)) { return TYPE_MAP.array; }
  
  // typeof
  return TYPE_MAP[typeof val];
}