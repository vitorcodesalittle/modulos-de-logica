import { EquivalenceErrors } from '../index';
import FormulaProp, { parse } from '../FormulaProp';
import {
  NOT_OPERATOR,
  OR_OPERATOR,
  AND_OPERATOR
} from '../operator-types';
import { InvalidEquivalenceTransformException } from './equivalence-errors';

/**
 * (A & (B | C)) eqs ((A & B) | (A & C))
 * @param {FormulaProp} A
 * @throws {InvalidEquivalenceTransformException} 
 */
export const distributiveAnd = (A) => {
  if (!A instanceof FormulaProp) {
    throw new Error("Essa função só aceita 1 parâmetro, que deve ser " + 
    "uma instância de FormulaProp")
  }
  try {
    const da = A.left;
    const dda = A.right;
    if (A.isAtom() || !A.isAnd() || !dda.isOr()) {
      throw new EquivalenceErrors.InvalidEquivalenceTransformException(
        `${A.toString()} não é uma fórmula do tipo (F1&(F2|F3))`
      )
    }
    return new FormulaProp(
      "(" +
        "(" +
            da.toString() + 
            AND_OPERATOR + 
            dda.left.toString()+
        ")" +
        OR_OPERATOR +
        "(" +
          da.toString() + 
          AND_OPERATOR + 
          dda.right.toString() +
        ")" +
      ")"
    )
  } catch (err) {
    throw err;
  }
}

/**
 * 
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const distributiveOr= (A) => {
  if (!A instanceof FormulaProp) {
    throw new Error("Essa função só aceita 1 parâmetro, que deve ser " + 
    "uma instância de FormulaProp")
  }
  try {
    const da = A.left;
    const dda = A.right;
    if (A.isAtom() || !A.isOr() || !dda.isAnd()) {
      throw new EquivalenceErrors.InvalidEquivalenceTransformException(
        `${A.toString()} não é uma fórmula do tipo (F1|(F2&F3))`
      )
    }
    return new FormulaProp(
      "(" +
        "(" +
            da.toString() + 
            OR_OPERATOR + 
            dda.left.toString()+
        ")" +
        AND_OPERATOR +
        "(" +
          da.toString() + 
          OR_OPERATOR + 
          dda.right.toString() +
        ")" +
      ")"
    )
  } catch (err) {
    throw err;
  }
}

/**
 * (A -> B) eqs ((!A) | B)
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const eliminateImplication = (A) => {
  if (!A instanceof FormulaProp) {
    throw new Error("Essa função só aceita 1 parâmetro, que deve ser " + 
    "uma instância de FormulaProp")
  }
  try {
    if (!A.isImply()) {
      throw new InvalidEquivalenceTransformException(
        `${A.toString()} não é uma fórmula do tipo (A->B)`
      )
    }
    return new FormulaProp(
      "(" +
        "(" +
          NOT_OPERATOR + A.left.toString() +
        ")" + 
        OR_OPERATOR + 
        A.right.toString() +
      ")"
    )
  } catch(err) {
    throw err;
  }
}

/**
 * (!(A&B)) eqs ((!A)|(!B))
 * (!(A|B)) eqs ((!A)&(!B))
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const deMorgan = (formula) => {
  if (!formula instanceof FormulaProp) {
    throw new Error("Essa função só aceita 1 parâmetro, que deve ser " + 
    "uma instância de FormulaProp")
  }
  try {
    if (!formula.isNot() || (!formula.right.isAnd() && !formula.right.isOr())) {
      throw new EquivalenceErrors.InvalidEquivalenceTransformException(
        `${formula.toString()} não é da forma (!(F1&F2)) ou (!(F1|F2))`
      )
    }
    const A = formula.right.left;
    const B = formula.right.right;
    return new FormulaProp(
      "(" +
        "(" +
          NOT_OPERATOR + A.toString() +
        ")" +
       ( formula.right.isAnd() ? OR_OPERATOR : AND_OPERATOR) +
        "(" +
          NOT_OPERATOR + B.toString() +
        ")" +
      ")"
    )
  } catch(err) {
    throw err;
  }
}

/**
 * 
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const eliminateDoubleNegation = (A) => {
  if (!A instanceof FormulaProp) {
    throw new Error("Essa função só aceita 1 parâmetro, que deve ser " + 
    "uma instância de FormulaProp")
  }
  if (!A.isNot() || !A.right.isNot()) {
    throw new EquivalenceErrors.InvalidEquivalenceTransformException(
      `${A.toString()} não é da forma (!(!F))`
    )
  }
  return new FormulaProp(
    A.right.right.toString()
  )
}

