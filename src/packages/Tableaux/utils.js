const {
	NOT_OPERATOR,
	AND_OPERATOR,
	OR_OPERATOR,
	IMPLY_OPERATOR,
} = require('../FormulaProp/operator-types');

const branchResult = {
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

export default branchResult;