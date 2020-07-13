import Branch from './Branch';
import Branches from './Branches';
import branchResult from './utils';

const stack = new Branches();

class Tableaux {
	constructor(formule, value) {
		const branch = new Branch();

		const node = new Node(formule, value);
		branch.push(node);

		stack.insert(branch);
		
		this.tree = new Tree(node);
		this.tree.create();
	}
}

class Tree {
	constructor(node) {
		this.node = node;

		this.left = null;
		this.right = null;
	}

	show() {
		if (this.left) {
			this.left.show();
		}
		if (this.right) {
			this.right.show();
		}
		console.log(this.node.formule.toString());
	}

	create() {
		console.log(this.node.formule)
		if (this.right) {
			this.right.create();
			return;
		}

		const branch = stack.get();

		if (branch.empty()) {
			stack.remove();
			return;
		}

		const node = branch.pop();

		if (node.formule.isAtom()) {
			const { error } = branch.validate(node.formule.right, node.value);

			if (error) {
				stack.remove();
				return;
			}else {
				const right_node = new Node(node.formule.right, node.value);
				this.right = new Tree(right_node);
				this.right.create();
				return;
			}
		}else {
			const { branch: split_branch, left, right } = node.willBranch();

			if (!split_branch) {
				if (node.formule.isOpUnary()) {
					const right_node = new Node(node.formule.right, right);
					branch.push(right_node);

					this.right = new Tree(right_node);
					
					this.right.create();
					return;
				}else {
					const left_node = new Node(node.formule.left, left);
					const right_node = new Node(node.formule.right, right);

					branch.push(left_node);
					branch.push(right_node);

					this.right = new Tree(left_node);
					this.right.right = new Tree(right_node);

					this.right.create();
					return;
				}
			}else {
				const copied_branch = branch.copy();

				const left_node = new Node(node.formule.left, left);
				const right_node = new Node(node.formule.right, right);

				copied_branch.push(left_node);
				branch.push(right_node);

				stack.insert(copied_branch);

				this.left = new Tree(left_node);
				this.right = new Tree(right_node);

				this.left.create();
				stack.remove();

				this.right.create();
				return;
			}
		}
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

		let result;
		if (this.formule.isAtom()){
			result = { branch: false };
		}else {
			result = branchResult[operator][value];
		}

		return result;
	}
}

export { Node };
export default Tableaux;
