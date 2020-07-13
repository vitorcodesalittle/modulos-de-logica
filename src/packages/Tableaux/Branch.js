class Branch {
	constructor() {
		this.values = [];
		this.primary_queue = [];
		this.secundary_queue = [];
	}

	empty() {
		if (this.primary_queue.length > 0 || this.secundary_queue > 0) {
			return false;
		}else {
			return true;
		}
	}

	push(node) {
		const { branch } = node.willBranch();
		
		if (branch) {
			this.secundary_queue.push(node);
		}else {
			this.primary_queue.push(node);
		}
	}

	pop() {
		let value;
		if (this.primary_queue.length > 0) {
			[value] = this.primary_queue.splice(0, 1);
		}else if (this.secundary_queue.length > 0) {
			[value] = this.secundary_queue.splice(0, 1);
		}else {
			value = { empty: true };
		}
		return value;
	}

	validate(variable, value) {}

	copy() {}
}

export default Branch;
