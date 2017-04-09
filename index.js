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
function typeOf (val, options) {
  // Fail fast
  if (options && typeOf(options) !== Object) { return console.log(`Lib typeOf: Parameter 'options' must be an Object.`); }
  const asText = options && options.asText ? true : false;

  // Handle constructors
  if (CONSTRUCTOR_LIST.includes(val)) { return asText ? makeAsText(val) : val; }

  // Handle exceptions to typeof
  if (val === null) { return asText ? makeAsText(TYPE_MAP.null) : TYPE_MAP.null; }
  if (Array.isArray(val)) { return asText ? makeAsText(TYPE_MAP.array) : TYPE_MAP.array; }
  
  // typeof
  return asText ? makeAsText(TYPE_MAP[typeof val]) : TYPE_MAP[typeof val];
}

function makeAsText (v) {
  if ( v === null ) { return 'Null'; }
  if ( v === undefined ) { return 'Undefined'; }
  return v.name;
}

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

tests.forEach(v => console.log(typeOf(v, { asText: true })))