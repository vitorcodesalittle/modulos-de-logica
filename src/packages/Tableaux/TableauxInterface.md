# Tableaux Interface


## Constructor
	(sentence) => Obj Tableaux
	sentence: PROP

- > let tableaux = new Tableaux()

- lança uma excessão caso 'sentence' não seja um objeto PROP


## Proprerty

- Sentence: 
	- > tableaux.sentence

- Subtree à esquerda:
	- > tableaux.left
	- null quando operador for Negação

- Subtree à direita:
	- > tableaux.right

- True-value:
    - > tableux.trueValue


## Metodos

- Pegar fórmula:
	- > tableaux.getSentence()
		- () => boolean

- Pegar o operador do escopo externo:
	- > tableaux.getOperator()
		- () => operator

- Pegar o valor booleano da sentença:
    - > tableaux.getValue()

- Pegar a subárvore à esquerda e à direita do operador:
	- > tableaux.left()
		- () => PROP

	- > tableaux.right()
		- () => PROP

