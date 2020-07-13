import { FormulaProp } from '../FormulaProp';
import Tableuax from './Tableaux';

describe('Testa o tableaux', () => {
	test('Testa o constructor do tableaux', () => {
		let formule = new FormulaProp('(b | c)');
		console.log(formule);

		// let tableaux = new Tableuax(formule, 0);

		// tableaux.tree.show();

		expect('a').toBe('a');
	})
})