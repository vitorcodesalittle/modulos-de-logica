# Application Programing Interface

## Constructor
	(str_formula) => Obj PROP
	str_formula: string

- > let formula = new Prop()

- lança uma excessão caso 'str_formula' não esteja bem formada


## Properties

- Operador: 
	- > formula.operator
	- null quando for Átomo

- Subformula à esquerda:
	- > formula.left
	- null quando operador for Negação

- Subformula à direita:
	- > formula.right


## Methods

- Verificador de fórmulas:
	- > word.verify(str)
		- (string) => boolean

- Pegar o operador do escopo externo:
	- > formula.getOperator()
		- () => operator

	- () => boolean:
		- > formula.isAtom()
		- > formula.isNot()
		- > formula.isAnd()
		- > formula.isOr()
		- > formula.isImply()

- Pegar a subfórmula à esquerda e à direita do operador:
	- > formula.left()
		- () => PROP

	- > formula.right()
		- () => PROP

- Aplicar valor verdade à fórmula:
	- > formula.evaluate([values])
		- ( [values] ) => boolean
		- values: array contendo os valores para cada variável

- Indentificar Operadores:

	- É Binário?
		- > formula.isOpBinary()

	- É Unário?
		- > formula.isOpUnary()

- Regras de Equivalência:
	- () => void: Fórmula é alterada internamente

	- Eliminar Dupla Negação:
		- > formula.opNegation()

	- Eliminição Implicação:
		- > formula.opImplication()

	- Regras de De Morgan:
		- > formula.deMorgan()

	- Distribuir a direita do E/OU:
		- > formula.rightDistribute()

	- Distribuir a esquerda do E/OU:
		- > formula.leftDistribute()
