class Graph {
	constructor(tree) {
		this.nodes = [new GNode()];
		this.vertices = [];
		this.i = 0;

		this.calculate(tree, 0);
	}

	calculate(tree, prev) {
		let n = this.i;
		this.nodes[n].init(tree.node);
		this.vertices[n] = [prev];

		if (tree.left) {
			let node = this.nodes[n].copy();
			this.nodes.push(node);
			this.i++;
			this.vertices[n].push(this.i);
			this.calculate(tree.left, n);
		}

		if (tree.right) {
			let node = this.nodes[n].copy();
			this.nodes.push(node);
			this.i++;
			this.vertices[n].push(this.i);
			this.calculate(tree.right, n);
		}
	}
}

class GNode {
	constructor() {
		this.variables = {};
		this.formule = null;
		this.value = null;
	}

	init(node) {
		this.formule = node.formule;
		this.value = node.value;

		if (node.formule.isAtom()) {
			let atom = node.formule.right;
			this.variables[atom] = node.value;
		}
	}

	copy() {
		let copy = new GNode();
		copy.variables = Object.assign({}, this.variables);
		return copy;
	}
}

export default Graph;
