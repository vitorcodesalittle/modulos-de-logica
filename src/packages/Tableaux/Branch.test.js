import Branch from './Branch';
import { FormulaProp } from '../FormulaProp/index';
import { Node } from './tableaux';

describe('Branch', () => {
	test('Testa o metodo push()', () => {
		let prop1 = new FormulaProp('(a -> b)');
		let prop2 = new FormulaProp('(a & b)');
		let prop3 = new FormulaProp('(a | b)');
		let prop4 = new FormulaProp('!a');

		let node1 = new Node(prop1, 0);
		let node2 = new Node(prop1, 1);
		let node3 = new Node(prop2, 0);
		let node4 = new Node(prop2, 1);
		let node5 = new Node(prop3, 0);
		let node6 = new Node(prop3, 1);
		let node7 = new Node(prop4, 0);
		let node8 = new Node(prop4, 1);

		let branch = new Branch();
		branch.push(node1);
		branch.push(node2);
		branch.push(node3);
		branch.push(node4);
		branch.push(node5);
		branch.push(node6);
		branch.push(node7);
		branch.push(node8);

		expect(branch.primary_queue[0]).toBe(node1);
	})
})