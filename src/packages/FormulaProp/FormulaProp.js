import {
  NOT_OPERATOR,
  OR_OPERATOR,
  AND_OPERATOR,
  IMPLY_OPERATOR,
  IFF_OPERATOR,
  OPERATORS
} from './operator-types';
const operatorThatStartsWith = OPERATORS.reduce((prev, cur) => {
  prev[cur[0]] = cur;
  return prev;
}, {})

/**
 * 
 * @param {string} formula 
 * 
 * @return {{ 
 * pedacoFormulaEsquerda: string, 
 * pedacoFormulaDireita: string, 
 * parsedOperator: string 
 * }}
 */

export const parse = (formula) => {
  let openedParenthesis = 0;

  let result = {
    pedacoFormulaEsquerda: null,
    pedacoFormulaDireita: null,
    parsedOperator: null
  }
  if (formula[0] === '(') {
    if (formula[1] === NOT_OPERATOR) {
      result.parsedOperator = NOT_OPERATOR;
      result.pedacoFormulaDireita = formula.slice(2, formula.length-1).trim();
      return result;
    }
    for (let i = 1; i < formula.length - 1; i++) {
      let char = formula[i];

      if (char === '(' ) {
        openedParenthesis += 1;
      } else if (char === ')') {
        openedParenthesis -= 1;
	  } else if (operatorThatStartsWith[char]) { // verifica se existe uma primeira letra no array firstCharOfOp q é igual a char
        if (openedParenthesis === 0) {
          result.parsedOperator = operatorThatStartsWith[char];
          let offset = operatorThatStartsWith[char].length;
          result.pedacoFormulaEsquerda = formula.slice(1, i).trim();
          result.pedacoFormulaDireita = formula.slice(i+offset, formula.length-1).trim();
          return result;
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
      const formulaParseada = parse(formula.trim());
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
        return `( ${this.operator}${this.right.toString()})`
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
