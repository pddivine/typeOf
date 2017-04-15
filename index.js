module.exports = typeOf;

const TYPE_MAP = {
  array: Array,
  boolean: Boolean,
  date: Date,
  function: Function,
  null: null,
  number: Number,
  object: Object,
  string: String,
  symbol: Symbol,
  undefined: undefined
};
const CONSTRUCTOR_LIST = [Array, Boolean, Date, Function, Number, Object, String, Symbol];

/**
 * Determine an intuitive response when querying a variable's type.
 * 
 * @param {any} val
 * @returns {String} An intuitive determination of a variable's type.
 */
function typeOf (val, options) {
  // Fail fast
  if (options && typeOf(options) !== Object) { return console.log(`Lib typeOf: Parameter 'options' must be an Object.`); }
  const asString = options && options.asString ? true : false;

  // Handle constructors
  if (CONSTRUCTOR_LIST.includes(val)) { return asString ? typeToString(val) : val; }

  // Handle exceptions to typeof
  if (val === null) { return asString ? typeToString(TYPE_MAP.null) : TYPE_MAP.null; }
  if (Array.isArray(val)) { return asString ? typeToString(TYPE_MAP.array) : TYPE_MAP.array; }
  if (val instanceof Date) { return asString ? typeToString(TYPE_MAP.date) : TYPE_MAP.date; }
  
  // typeof
  return asString ? typeToString(TYPE_MAP[typeof val]) : TYPE_MAP[typeof val];
}

/**
 * Convert type to string
 * 
 * @param {any} type Any type in TYPE_MAP.
 * @returns {string} The type converted to a string.
 */
function typeToString (type) {
  if ( type === null ) { return 'Null'; }
  if ( type === undefined ) { return 'Undefined'; }
  return type.name;
}