import { EquivalenceErrors } from '../index';
import FormulaProp, { parse } from '../FormulaProp';
import {
  NOT_OPERATOR,
  OR_OPERATOR,
  AND_OPERATOR,
  IMPLY_OPERATOR,
  IFF_OPERATOR,
  OPERATORS
} from '../operator-types';

/**
 * (A & (B | C)) eqs ((A & B) | (A & C))
 * @param {FormulaProp} A
 * @throws {InvalidEquivalenceTransformException} 
 */
export const distributiveAnd = (A) => {
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

}

/**
 * 
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const eliminateImplication = (A) => {

}

/**
 * 
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const deMorgan = (A) => {

}

/**
 * 
 * @param {FormulaProp} A 
 * @throws {InvalidEquivalenceTransformException}
 */
export const eliminateDoubleNegation = (A) => {
  
}
