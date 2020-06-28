# TableauxTree Interface


## Constuctor
(sentence, boolean) => Obj TableauxTree
	sentence: PROP

- > let tableauxTree = new TableauxTree()

- lança uma excessão caso 'sentence' não seja um objeto PROP


## Proprerties

- Operador: 
	- > tableauxTree.operator
	- null quando for Átomo

- Valor booleano:
    - > tableauxTree.valueBoolean

- Nó à direita:
	- > tableauxTree.right

- Nó à esquerda:
	- > tableauxTree.left
	- null quando operador for Negação


## Methods

- Pegar o nó à direita e o nó à esquerda:
    - > tableauxTree.RigthSubtree()
	    - () => tableauxTree

    - > tableauxTree.LeftSubtree()
	    - () => tableauxTree

- Pegar todos os ramos abertos e todos os ramos fechados:
    - > tableauxTree.OpenBranches()		    	// backtracking (?)
	    - () => lista de fórmulas PROP

    - > tableauxTree.ClosedBranches()			// backtracking (?)
	    - () => lista de listas de fórmulas PROP

- Pegar todas as valorações possíveis:
    - > tableauxTree.PossibleValorations()
	    - () => lista de listas de "variável = boolean"

- Responder sobre satisfatibilidade:
    - () => boolean
	    - > tableauxTree.isSatisfable()
	    - > tableauxTree.isContradiction()
	    - > tableauxTree.isRefutable()
	-    > tableauxTree.isTautology()

- O nó é uma folha?
    - > tableauxTree.isLeaf()
	    - () => boolean

- O nó bifurca?
    - > tableauxTree.isFork()
        - () => boolean

- O tableaux é analítico?
    - > tableauxTree.isAnalitc()
	    - () => boolean

- Transformar o tableaux em tableaux analítico:
    - > tableauxTree.makeAnalitic()				// torna o tableaux analítico
	    - () => ()