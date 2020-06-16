
/**
 * 
 * ( (!a) <-> (!(a & b)) )
 */
const removeParenthesis = string => string.slice(1, string.length-2 )

const parseAux = () => {

}

/**
 * 
 * @param {string} formula 
 * 
 * @return {{ pedacoFormulaEsquerda: string, pedacoFormulaDireita: string, operator: string }}
 */
const parse = (formula) => {
  let openedParenthesis = 0;

  let result = {
    pedacoFormulaEsquerda: null,
    pedacoFormulaDireita: null,
    parsedOperator: null
  }
  if (formula[0] === '(') {
    // (!a)
    if (formula[1] === NOT_OPERATOR) {
      result.parsedOperator = NOT_OPERATOR;
      result.pedacoFormulaDireita = formula.slice(2, formula.length-1)
      return result;
    }
    for (let i = 1; i < formula.length - 1; i++) {
      let char = formula[i];

      if (char === '(' ) {
        openedParenthesis += 1;
      } else if (char === ')') {
        openedParenthesis -= 1;
      } else if (char === IMPLY_OPERATOR[0]) {
          if (openedParenthesis === 0) {
            let offset = 2;
            result.parsedOperator = IMPLY_OPERATOR
            result.pedacoFormulaEsquerda = formula.slice(1, i)
            result.pedacoFormulaDireita = formula.slice(i+offset, formula.length-1)
          }
      } else if (char === IFF_OPERATOR[0]) {  
          if (openedParenthesis === 0) {
            result.parsedOperator = '<->';
            let offset = 3;
            result.pedacoFormulaEsquerda = formula.slice(1, i)
            result.pedacoFormulaDireita = formula.slice(i+offset, formula.length-1)
          }
      } else if (char === NOT_OPERATOR || char === OR_OPERATOR) { // '&' '|'
        if (openedParenthesis === 0) {
          result.parsedOperator = char;
          result.pedacoFormulaEsquerda = formula.slice(1, i)
          result.pedacoFormulaDireita = formula.slice(i+1, formula.length-1)
        }
      }
    }
  } else {
    result.pedacoFormulaDireita = formula
  }

  return result;
}

/**
 * 
 * @param {*} formula 
 */
const formulaIsValida = (formula) => true;

const NOT_OPERATOR = '!';
const AND_OPERATOR = '&';
const OR_OPERATOR = '|';
const IMPLY_OPERATOR = '';
const IFF_OPERATOR = '#';

const OPERATORS = [
  NOT_OPERATOR,
  AND_OPERATOR,
  OR_OPERATOR,
  IMPLY_OPERATOR,
  IFF_OPERATOR
]
// ( (!a) <-> c )
class FormulaProp {
  constructor(formula) {
    if (!formula) {
      throw new Error("formula não pode ser vazia");
    }
    this.left = null;
    this.right = null;
    this.operator = null;
    if (formulaIsValida(formula)) {
      const formulaParseada = parse(formula);
      const {
        pedacoFormulaEsquerda,
        pedacoFormulaDireita,
        parsedOperator
      } = formulaParseada;
      if (!parsedOperator) {
        this.right = pedacoFormulaDireita;
      } else if(parsedOperator === NOT_OPERATOR) {
        this.operator = parsedOperator
        this.right = new FormulaProp(pedacoFormulaDireita);
      } else {
        this.left = new FormulaProp(pedacoFormulaEsquerda)
        this.right = new FormulaProp(pedacoFormulaDireita)
        this.operator = parsedOperator
      }
    } else {
      throw new Error("formula não bem formada")
    }
  }

  isAtom = () => this.operator === null;
  isOpUnary = () => this.left === null
  isOpBinary = () => this.left !== null;


  toString = () => {
    if (this.isAtom()) {
      return this.right;
    } else {
      if (this.isOpUnary()) {
        return `(${this.operator}${this.right.toString()})`
      } else {
        return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`
      }
    }
  }
  isNot = () => this.operator === NOT_OPERATOR;
  isOr = () => this.operator === OR_OPERATOR;
  isAnd = () => this.operator === AND_OPERATOR;
  isImply = () => this.operator === IMPLY_OPERATOR;
  isEquivalence = () => this.operator === IFF_OPERATOR;

  /**
   * @returns {Number} altura da árvore
   */
  calculateHeight = () => {
    if (this.isAtom()) {
      return 0;
    } else if(this.isNot()) {
      return 1 + this.right.calculateHeight();
    } else {
      return 1 + Math.max(
        this.left.calculateHeight(),
        this.right.calculateHeight()
      )
    }
  }


  /*
  
        x
      /   \
      o    o
    /  \   /\
    o   o o  o

 */
 getSubFormulasAux = (memo) => {
  if (this.isAtom()) {
    memo.push(this.right);
    return memo;
  } else {
    if (this.isOpUnary()) {
      this.right.getSubFormulasAux(memo);
    } else {
      this.right.getSubFormulasAux(memo);
      this.left.getSubFormulasAux(memo);
    }
    memo.push(this); // acho que funciona
  }
 }

  getSubFormulas = () => {
    let memo = [] 
    this.getSubFormulasAux(memo);
    return memo;
  }

}

export default FormulaProp;
