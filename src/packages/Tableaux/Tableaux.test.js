import { FormulaProp } from '../FormulaProp';
import Tableuax from './Tableaux';

const formula = [
	'(a & b)',
	'(a | b)',
	'(a -> b)',
	'(!a)',
	'(a -> (b | c))',
	'(((a -> b) & (b -> c)) -> (a -> c))'
]

describe('Testa o tableaux', () => {
	test('Testa o constructor do tableaux', () => {
		let formule = new FormulaProp(formula[5]);

		let tableaux = new Tableuax(formule, 0);

		console.log('------------- Show Tree -------------')
		tableaux.tree.show();

		expect('a').toBe('a');
	})
})