import FormulaProp from './FormulaProp';
describe("FormulaProp", () => {
  test("tem método toString()", () => {
    let formula = new FormulaProp();
    expect(formula.toString()).toBeTruthy()
  })

  test("conjunção com outra fórmula funciona", () => {
    let formula = new FormulaProp();
    let formula2 = new FormulaProp();
    expect(formula.conjunction(formula2)).toBeTruthy();
  })
/*
((!a)<->(!(a&b)))
(!A)
    
*/
  test("construtor funciona", () => {
    expect("1234".slice(0, 3)).toBe("123")
    expect("1234".slice(1, 2)).toBe("2")
    let formula = new FormulaProp('(!a)')
  })
})