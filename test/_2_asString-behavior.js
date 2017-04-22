const { expect } = require('chai');
const root = process.mainModule.paths[0].split('node_modules')[0];
const typeOf = require(root);

const example = {
  value: {
    array: [],
    boolean: true,
    date: (new Date()),
    function: function () {},
    null: null,
    number: 0,
    object: {},
    string: '',
    symbol: Symbol(),
    undefined: undefined
  },
  constructor: {
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
  }
}

function typeOfAsString (value) {
  return typeOf( value, { asString: true });
}


describe (`The 'typeOf' library`, function () {
  describe ('with options at default', function () {
    describe('and checking a value of type', function () {
      describe('array', function () {
        it('should return the String constructor.', function () {
          expect(typeOfAsString(example.value.array)).to.equal('array');
        });
      });
      describe('boolean', function () {
        it('should return the Boolean constructor.', function () {
          expect(typeOfAsString(example.value.boolean)).to.equal('boolean');
        });
      });
      describe('date', function () {
        it('should return the Date constructor.', function () {
          expect(typeOfAsString(example.value.date)).to.equal('date');
        });
      });
      describe('function', function () {
        it('should return the Function constructor.', function () {
          expect(typeOfAsString(example.value.function)).to.equal('function');
        });
      });
      describe('null', function () {
        it('should return the special null value.', function () {
          expect(typeOfAsString(example.value.null)).to.equal('null');
        });
      });
      describe('number', function () {
        it('should return the Number constructor.', function () {
          expect(typeOfAsString(example.value.number)).to.equal('number');
        });
      });
      describe('object', function () {
        it('should return the Object constructor.', function () {
          expect(typeOfAsString(example.value.object)).to.equal('object');
        });
      });
      describe('string', function () {
        it('should return the String constructor.', function () {
          expect(typeOfAsString(example.value.string)).to.equal('string');
        });
      });
      describe('symbol', function () {
        it('should return the Symbol constructor.', function () {
          expect(typeOfAsString(example.value.symbol)).to.equal('symbol');
        });
      });
      describe('undefined', function () {
        it('should return the undefined value.', function () {
          expect(typeOfAsString(example.value.undefined)).to.equal('undefined');
        });
      });
    });

    describe('and checking constructor/special value', function () {
      describe('array', function () {
        it('should return the String constructor.', function () {
          expect(typeOfAsString(example.constructor.array)).to.equal('array');
        });
      });
      describe('boolean', function () {
        it('should return the Boolean constructor.', function () {
          expect(typeOfAsString(example.constructor.boolean)).to.equal('boolean');
        });
      });
      describe('date', function () {
        it('should return the Date constructor.', function () {
          expect(typeOfAsString(example.constructor.date)).to.equal('date');
        });
      });
      describe('function', function () {
        it('should return the Function constructor.', function () {
          expect(typeOfAsString(example.constructor.function)).to.equal('function');
        });
      });
      describe('null', function () {
        it('should return the special null value.', function () {
          expect(typeOfAsString(example.constructor.null)).to.equal('null');
        });
      });
      describe('number', function () {
        it('should return the Number constructor.', function () {
          expect(typeOfAsString(example.constructor.number)).to.equal('number');
        });
      });
      describe('object', function () {
        it('should return the Object constructor.', function () {
          expect(typeOfAsString(example.constructor.object)).to.equal('object');
        });
      });
      describe('string', function () {
        it('should return the String constructor.', function () {
          expect(typeOfAsString(example.constructor.string)).to.equal('string');
        });
      });
      describe('symbol', function () {
        it('should return the Symbol constructor.', function () {
          expect(typeOfAsString(example.constructor.symbol)).to.equal('symbol');
        });
      });
      describe(' undefined', function () {
        it('should return the undefined value.', function () {
          expect(typeOfAsString(example.constructor.undefined)).to.equal('undefined');
        });
      });
    });
  });
}); 