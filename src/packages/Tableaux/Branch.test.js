import Branch from './Branch';
import { FormulaProp } from '../FormulaProp/index';
import { Node } from './tableaux';

describe('Branch', () => {
	test('Testa o metodo push()', () => {
		let prop1 = new FormulaProp('(a -> b)');
		let prop2 = new FormulaProp('(a & b)');
		let prop3 = new FormulaProp('(a | b)');
		let prop4 = new FormulaProp('(!a)');

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
		expect(branch.primary_queue[1]).toBe(node4);
		expect(branch.primary_queue[2]).toBe(node5);
		expect(branch.primary_queue[3]).toBe(node7);
		expect(branch.primary_queue[4]).toBe(node8);
		expect(branch.secundary_queue[0]).toBe(node2);
		expect(branch.secundary_queue[1]).toBe(node3);
		expect(branch.secundary_queue[2]).toBe(node6);
	})

	test('testa o metodo pop()', () => {
		let prop1 = new FormulaProp('(a -> b)');
		let prop2 = new FormulaProp('(a & b)');
		let prop3 = new FormulaProp('(a | b)');
		let prop4 = new FormulaProp('(!a)');

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

		let result1 = branch.pop();
		let result2 = branch.pop();
		let result3 = branch.pop();
		let result4 = branch.pop();
		let result5 = branch.pop();
		let result6 = branch.pop();
		let result7 = branch.pop();
		let result8 = branch.pop();

		expect(result1).toBe(node1);
		expect(result2).toBe(node4);
		expect(result3).toBe(node5);
		expect(result4).toBe(node7);
		expect(result5).toBe(node8);
		expect(result6).toBe(node2);
		expect(result7).toBe(node3);
		expect(result8).toBe(node6);
	})

	test('testa o metodo copy()', () => {
		const prop = [
			new FormulaProp('(a -> b)'),
			new FormulaProp('(a & b)'),
			new FormulaProp('(a | b)'),
			new FormulaProp('(!a)'),
		]

		const node = [];
		for (let i = 0; i < prop.length; i++) {
			node.push(new Node(prop[i], 0));
			node.push(new Node(prop[i], 1));
		}

		const branch = new Branch();
		for (let i = 0; i < node.length; i++) {
			branch.push(node[i]);
		}

		const copy_branch = branch.copy();

		expect(copy_branch).toStrictEqual(branch);
		
		branch.pop();
		expect(copy_branch).not.toStrictEqual(branch);

		copy_branch.pop();
		expect(copy_branch).toStrictEqual(branch);
	})

	test('testa o metodo validate()', () => {
		const branch = new Branch();

		expect(branch.validate('a', 1)).toStrictEqual({ error: false });
		expect(branch.validate('b', 1)).not.toStrictEqual({ error: true });

		expect(branch.validate('a', 1)).toStrictEqual({ error: false });
		expect(branch.validate('a', 5)).toStrictEqual({ error: true });
	})
})