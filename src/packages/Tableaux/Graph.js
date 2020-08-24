const drive = {
	'0': {
		left: {
			dir: -1,
			pos: -1,
		},
		middle: {
			dir: 0,
			pos: 0,
		},
		right: {
			dir: 1,
			pos: 1,
		}
	},
	'1': {
		left: {
			dir: 0,
			pos: 1,
		},
		middle: {
			dir: 0,
			pos: 1,
		},
		right: {
			dir: 1,
			pos: 1,
		},
	},
	'-1': {
		left: {
			dir: -1,
			pos: -1,
		},
		middle: {
			dir: 0,
			pos: -1,
		},
		right: {
			dir: 0,
			pos: -1,
		},
	},
}

class Graph {
	constructor(tableaux) {
		this.nodes = [new GNode()];
		this.vertices = [];
		this.i = 0;

		this.calculate(tableaux.tree, 0, 0, 0);
	}

	calculate(tree, prev, dir, pos) {
		let n = this.i;
		this.nodes[n].init(tree.node, dir);
		this.vertices[n] = [prev];

		let split = false;

		const { left, ...direct} = drive[pos];

		if (tree.left) {
			split = true;

			let node = this.nodes[n].copy();
			this.nodes.push(node);
			this.i++;
			this.vertices[n].push(this.i);
			this.calculate(tree.left, n, left.dir, left.pos);
		}

		const right = split ? direct.right : direct.middle;

		if (tree.right) {
			let node = this.nodes[n].copy();
			this.nodes.push(node);
			this.i++;
			this.vertices[n].push(this.i);
			this.calculate(tree.right, n, right.dir, right.pos);
		}
	}
}

class GNode {
	constructor() {
		this.variables = {};
		this.formule = null;
		this.value = null;

		this.position = { x: 0, y: 0 };
		this.orientation = 0;
		this.isAtom = false;
	}

	init(node, dir) {
		this.formule = node.formule;
		this.value = node.value;

		if (node.formule.isAtom()) {
			let atom = node.formule.right;
			this.variables[atom] = node.value;
			this.isAtom = true;
		}

		const direction = {
			'0': { x: 0, y: 1 },
			'1': { x: 2, y: 1 },
			'-1': { x: -2, y: 1 },
		}

		this.orientation = this.orientation === 0 ? dir : this.orientation;

		const { x, y } = direction[dir];
		const pos = this.position;
		pos.x += x;
		pos.y += y;
	}

	copy() {
		let copy = new GNode();
		copy.variables = Object.assign({}, this.variables);
		copy.position = Object.assign({}, this.position);
		copy.orientation = this.orientation;
		return copy;
	}
}

export default Graph;
