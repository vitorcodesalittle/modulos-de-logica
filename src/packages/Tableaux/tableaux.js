const Branch = require('./branch');

const stack = [];
const {
	NOT_OPERATOR,
	AND_OPERATOR,
	OR_OPERATOR,
	IMPLY_OPERATOR,
} = require('../FormulaProp/operator-types');

const willBranch = {
	[AND_OPERATOR]: {
		negative: { branch: true, left: 0, right: 0 },
		positive: { branch: false, left: 1, right: 1 },
	},
	[OR_OPERATOR]: {
		negative: { branch: false, left: 0, right: 0 },
		positive: { branch: true, left: 1, right: 1 },
	},
	[NOT_OPERATOR]: {
		negative: { branch: false, right: 1 },
		positive: { branch: false, right: 0 },
	},
	[IMPLY_OPERATOR]: {
		negative: { branch: false, left: 1, right: 0 },
		positive: { branch: true, left: 0, right: 1 },
	},
}

const create_tableaux = (formule, value) => {
	

	return tableaux;
}

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

		create();
	}

	create() {

	}
}

class Node {
	constructor(formule, value) {
		this.formule = formule;
		this.value = value;
	}

	will_branch() {
		const operator = this.formule.operator;
		const value = this.value === 1 ? 'positive' : 'negative'
		return willBranch[operator][value];
	}
}
