import { Equivalences, EquivalenceErrors } from '../index';
import FormulaProp from '../FormulaProp';

describe("Os métodos de equivalência", () => {
  test("(!(a&b)) equivale a ((!a)|(!b))", () => {
    let A = new FormulaProp("(!(a&b))");
    let B = Equivalences.deMorgan(A);
    expect(B.toString()).toBe('((!a)|(!b))')
  })
  test("(!(a|b)) equivale a ((!a)&(!b))", () => {
    let A = new FormulaProp('(!(a|b))');
    let B = Equivalences.deMorgan(A);
    expect(B.toString()).toBe('((!a)&(!b))')
  })
  test("(a&(b|c)) equivale a ((a&b)|(a&c))", () => {
    let A = new FormulaProp('(a&(b|c))');
    let B = Equivalences.distributiveAnd(A);
    expect(B.toString()).toBe('((a&b)|(a&c))')
  })
  test("(a|(b&c)) equivale a ((a|b)&(a|c))", () => {
    let A = new FormulaProp('(a|(b&c))');
    let B = Equivalences.distributiveOr(A);
    expect(B.toString()).toBe('((a|b)&(a|c))')
  })
  test("(!(!a)) equivale a a", () => {
    let A = new FormulaProp('(!(!a))')
    let B = Equivalences.eliminateDoubleNegation(A);
    expect(B.toString()).toBe('a')
  })
  test("(a->b) equivale a ((!a)|b)", () => {
    let A = new FormulaProp('(a->b)');
    let B = Equivalences.eliminateImplication(A);
    expect(B.toString()).toBe('((!a)|b)')
  })
  test("invalid equivalence transforms throw " +
  "InvalidEquivalenceTransformException", () => {
    expect(() => {
      let A = new FormulaProp('(a<->b)');
      let B = Equivalences.eliminateImplication(A);
    }).toThrow(EquivalenceErrors.InvalidEquivalenceTransformException)
    expect(() => {
      let A = new FormulaProp('a');
      let B = Equivalences.eliminateDoubleNegation(A);
    }).toThrow(EquivalenceErrors.InvalidEquivalenceTransformException)
    expect(() => {
      let A = new FormulaProp('(a&b)');
      let B = Equivalences.deMorgan(A);
    }).toThrow(EquivalenceErrors.InvalidEquivalenceTransformException)
  })
})