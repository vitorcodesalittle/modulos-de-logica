class Branches {
	constructor() {
		this.stack = [];
	}

	insert(branch) {
		this.stack.push(branch);
	}

	remove() {
		return this.stack.pop();
	}

	get() {
		const last = this.stack.length - 1;
		return this.stack[last];
	}
}

export default Branches;
