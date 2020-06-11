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

  //...
})