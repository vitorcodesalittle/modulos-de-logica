import FormulaProp from '../FormulaProp'

let branchList = new BranchList();

class TableauxTree {
	constructor(prop, value) {
		this.node = new PropNode(prop, value);
		
		let first_branch = new Branch();
		first_branch.push(this.node);
		branchList.insert(first_branch);

		while(!branchList.empty()) {
			const branch = branchList.pop();
			/**
			 * 	let { heap, list } = branch
			 * 
			 * 	let node = heap.pop()
			 * 	let { prop } = node;
			 * 
			 * 	while(!node.split) {
			 * 		if (prop.isAtom()){
			 *			//Validation
			 * 		}else if (prop.isOpUnary()) {
			 * 			let new_node = new PropNode(prop.right(), !node.value);
			 * 			heap.push(new_node);
			 * 		}else {
			 * 			let value = evaluateValue(prop, node.value); //[value1, value2]
			 * 			let new_node1 = new PropNode(prop.left(), value[0]);
			 * 			let new_node2 = new PropNode(prop.right(), value[1]);
			 * 
			 * 			heap.push(new_node1);
			 * 			heap.push(new_node2);
			 * 		}
			 * 
			 * 		node = heap.pop()
			 * 	}
			 * 
			 * 	let branch1 = branch;
			 * 	let branch2 = new Branch(branch);
			 * 
			 * 	branchList.insert(branch1);
			 * 	branchList.insert(branch2);
			 */

		}
	}
}

class PropNode {
	constructor(prop, value) {
		this.prop = prop;
		this.val = value;

		this.open = false;

		this.path1 = null;
		this.path2 = null;
	}
}
