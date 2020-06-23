import FormulaProp, { parse } from './FormulaProp';
describe("FormulaProp", () => {

  test("parse de '(!a)' é { pedacoFormulaDireita: 'a', pedacoFormulaEsquerda: null, parsedOperator: '!' }", () => {
    let result = parse("(!a)");
    expect(result.pedacoFormulaDireita).toBe('a')
    expect(result.pedacoFormulaEsquerda).toBe(null)
    expect(result.parsedOperator).toBe('!')
  })

  
  test("parse de '(a<->b)' é { pedacoFormulaEsquerda: 'a', pedacoFormulaDireita: 'b', parsedOperator:'<->' }", () => {
    let result = parse("(a<->b)");
    expect(result.pedacoFormulaDireita).toBe('b')
    expect(result.pedacoFormulaEsquerda).toBe('a')
    expect(result.parsedOperator).toBe('<->')
  })

  test("parse de '(a->b)' é { pedacoFormulaEsquerda: 'a', pedacoFormulaDireita: 'b', parsedOperator:'->' }", () => {
    let result = parse("(a->b)");
    expect(result.pedacoFormulaDireita).toBe('b')
    expect(result.pedacoFormulaEsquerda).toBe('a')
    expect(result.parsedOperator).toBe('->')
  })

  
  test("parse de '((!a)<->(!b))' é { pedacoFormulaDireita: '(!b)', pedacoFormulaEsquerda: '(!a)', parsedOperator:'<->' }", () => {
    let result = parse("((!a)<->(!b))");
    expect(result.pedacoFormulaDireita).toBe('(!b)')
    expect(result.pedacoFormulaEsquerda).toBe('(!a)')
    expect(result.parsedOperator).toBe('<->')
  })
  
  test("construtor e toString() estão coerentes (uma leva ao resultado da outra)", () => {
    let formula = new FormulaProp('((!a)<->b)')
    let stringFormula = formula.toString();
    expect(stringFormula).toBe('((!a)<->b)')
    let formula2 = new FormulaProp('((!a)<->(!b))')
    let stringFormula2 = formula2.toString();
    expect(stringFormula2).toBe('((!a)<->(!b))')
  })

})