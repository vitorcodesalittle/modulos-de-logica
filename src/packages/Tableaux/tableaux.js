import Branch from './Branch';
import branchResult from './utils';

const stack = [];

class Tableaux {
	constructor(formule, value) {
		const branch = new Branch();
		const node = new Node(formule, value);
		branch.push(node);
		stack.push(branch);
	
		this.tableaux = new Tree(formule, value);
		this.tableaux.create();
	}
}

class Tree {
	constructor(formule, value) {
		this.node = new Node(formule, value);

		this.left = null;
		this.right = null;

		// create();
	}

	create() {

	}
}

class Node {
	constructor(formule, value) {
		this.formule = formule;
		this.value = value;
	}

	willBranch() {
		const operator = this.formule.operator;
		const value = this.value === 1 ? 'positive' : 'negative';
		const result = branchResult[operator][value];
		
		return result;
	}
}

export { Node };
