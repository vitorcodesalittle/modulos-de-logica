import FormulaProp from './FormulaProp';
describe("FormulaProp", () => {

  test("construtor funciona", () => {
    expect("1234".slice(0, 3)).toBe("123")
    expect("1234".slice(1, 2)).toBe("2")
    let formula = new FormulaProp('((!a)<->b)')
    let stringFormula = formula.toString();
    console.log('formula:', stringFormula)
    expect(stringFormula).toBe('((!a)<->b)')
  })
})