# Application Programing Interface

## Construtor
	(str_formula) => Obj PROP
	str_formula: string

- > let formula = new Prop()

- lança uma excessão caso 'str_formula' não esteja bem formada


## Propriedades

- Operador: 
	- > formula.operator
	- null quando for atômico

- Subformula a esquerda:
	- > formula.left
	- null quando operador for Negação

- Subformula a direita:
	- > formula.right

- Tamanho da Árvore Síntatica
	- > formula.height

- Lista de Variavéis
	- > formula.variables
	- array contendo as variaveis da formula


## Metodos

- Verificador de fórmulas
	- > PROP.verify(str)
		- (string) => boolean

- Pegar o operador do escopo externo
	- > formula.getOperator()
		- () => operator

	- () => boolean
		- > formula.isAtom()
		- > formula.isNot()
		- > formula.isAnd()
		- > formula.isOr()
		- > formula.isImply()

- Pegar a subfórmula a esquerda e direita do operador
	- > formula.left()
		- () => PROP

	- > formula.right()
		- () => PROP

- Aplicar valor verdade a fórmula
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

	- Eliminar Dupla Negação
		- > formula.opNegation()

	- Eliminição Implicação
		- > formula.opImplication()

	- Regras de De Morgan
		- > formula.deMorgan()

	- Distribuir a direita do E/OU
		- > formula.rightDistribute()

	- Distribuir a esquerda do E/OU
		- > formula.leftDistribute()
