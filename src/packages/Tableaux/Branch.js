class Branch {
	constructor() {
		this.values = {};
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

	validate(variable, value) {
		const result = { error: false };
		const exist = this.values[variable];
		if (exist) {
			if (exist !== value) {
				result.error = true;
			}
		}else {
			this.values[variable] = value;
		}
		return result;
	}

	copy() {
		const copy = new Branch();
		const copy_values = Object.assign({}, this.values);
		const copy_primary = this.primary_queue.map(node => node);
		const copy_secundary = this.secundary_queue.map(node => node);

		copy.values = copy_values;
		copy.primary_queue = copy_primary;
		copy.secundary_queue = copy_secundary

		return copy;
	}
}

export default Branch;
