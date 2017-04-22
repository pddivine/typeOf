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

describe (`The 'typeOf' library`, function () {
  describe ('with options at default', function () {
    describe('and checking a value of type', function () {
      describe('array', function () {
        it('should return the String constructor.', function () {
          expect(typeOf(example.value.array)).to.equal(Array);
        });
      });
      describe('boolean', function () {
        it('should return the Boolean constructor.', function () {
          expect(typeOf(example.value.boolean)).to.equal(Boolean);
        });
      });
      describe('date', function () {
        it('should return the Date constructor.', function () {
          expect(typeOf(example.value.date)).to.equal(Date);
        });
      });
      describe('function', function () {
        it('should return the Function constructor.', function () {
          expect(typeOf(example.value.function)).to.equal(Function);
        });
      });
      describe('null', function () {
        it('should return the special null value.', function () {
          expect(typeOf(example.value.null)).to.equal(null);
        });
      });
      describe('number', function () {
        it('should return the Number constructor.', function () {
          expect(typeOf(example.value.number)).to.equal(Number);
        });
      });
      describe('object', function () {
        it('should return the Object constructor.', function () {
          expect(typeOf(example.value.object)).to.equal(Object);
        });
      });
      describe('string', function () {
        it('should return the String constructor.', function () {
          expect(typeOf(example.value.string)).to.equal(String);
        });
      });
      describe('symbol', function () {
        it('should return the Symbol constructor.', function () {
          expect(typeOf(example.value.symbol)).to.equal(Symbol);
        });
      });
      describe('undefined', function () {
        it('should return the undefined value.', function () {
          expect(typeOf(example.value.undefined)).to.equal(undefined);
        });
      });
    });

    describe('and checking constructor/special value', function () {
      describe('Array', function () {
        it('should return the String constructor.', function () {
          expect(typeOf(example.constructor.array)).to.equal(Array);
        });
      });
      describe('Boolean', function () {
        it('should return the Boolean constructor.', function () {
          expect(typeOf(example.constructor.boolean)).to.equal(Boolean);
        });
      });
      describe('Date', function () {
        it('should return the Date constructor.', function () {
          expect(typeOf(example.constructor.date)).to.equal(Date);
        });
      });
      describe('Function', function () {
        it('should return the Function constructor.', function () {
          expect(typeOf(example.constructor.function)).to.equal(Function);
        });
      });
      describe('null', function () {
        it('should return the special null value.', function () {
          expect(typeOf(example.constructor.null)).to.equal(null);
        });
      });
      describe('Number', function () {
        it('should return the Number constructor.', function () {
          expect(typeOf(example.constructor.number)).to.equal(Number);
        });
      });
      describe('Object', function () {
        it('should return the Object constructor.', function () {
          expect(typeOf(example.constructor.object)).to.equal(Object);
        });
      });
      describe('String', function () {
        it('should return the String constructor.', function () {
          expect(typeOf(example.constructor.string)).to.equal(String);
        });
      });
      describe('Symbol', function () {
        it('should return the Symbol constructor.', function () {
          expect(typeOf(example.constructor.symbol)).to.equal(Symbol);
        });
      });
      describe('undefined', function () {
        it('should return the undefined value.', function () {
          expect(typeOf(example.constructor.undefined)).to.equal(undefined);
        });
      });
    });
  });
}); 