# TableauxTree Interface


## Constuctor
(formula, booleanValue) => Obj TableauxTree
	formula: PROP

- > let tableauxTree = new TableauxTree()

- lança uma excessão caso 'formula' não seja um objeto PROP


## Proprerties

- Operador: 
	- > tableauxTree.operator
	- null quando for Átomo

- Valor booleano:
    - > tableauxTree.booleanValue

- Nó à direita:
	- > tableauxTree.right

- Nó à esquerda:
	- > tableauxTree.left
	- null quando operador for Negação

- Formato:
	- > tableauxTree.fork
	- true quando bifurcar, false quando não

## Methods

- Pegar o nó à direita e o nó à esquerda:
    - > tableauxTree.RigthSubtree()
	    - () => tableauxTree

    - > tableauxTree.LeftSubtree()
	    - () => tableauxTree

- Transformando fórmula em trecho de árvore:

	- > tableauxTree.makeNode()
		if tableauxTree.isLeaf():
			return "formula = value";
		else:
			if op == NOT && value == True:
				tableauxTree.rigth(formula.right(), False);
			if op == NOT && value == False:
				tableauxTree.rigth(formula.right(), True);
			if op == AND && value == True:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
			if op == AND && value == False:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
				fork = True; 
			if op == OR && value == True:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
				fork = True; 
			if op == OR && value == False:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
			if op == IMPLY && value == True:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
				fork = True; 
			if op == IMPLY && value == False:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
			if op == IFF && value == True:
				tableauxTree.rigth(formula.right(), True);
				tableauxTree.left(formula.left(), True);
			if op == IFF && value == False:
				tableauxTree.rigth(formula.right(), False);
				tableauxTree.left(formula.left(), False); 

- Pegar todos os ramos abertos e todos os ramos fechados:
    - > tableauxTree.openBranches()		    	// backtracking (?)
	    - () => lista de fórmulas PROP

    - > tableauxTree.closedBranches()			// backtracking (?)
	    - () => lista de listas de fórmulas PROP

- Pegar todas as valorações possíveis:
    - > tableauxTree.possibleValorations()
	    - () => lista de listas de "variável = booleano"

- Responder sobre satisfatibilidade:
    - () => booleanValue
	    - > tableauxTree.isSatisfable()
	    - > tableauxTree.isContradiction()
	    - > tableauxTree.isRefutable()
	-    > tableauxTree.isTautology()

- O nó é uma folha?
    - > tableauxTree.isLeaf()
	    - () => booleanValue

- O nó bifurca?
    - > tableauxTree.isFork()
        - () => booleanValue

- O tableaux é analítico?
    - > tableauxTree.isAnalitc()
	    - () => booleanValue

- Transformar o tableaux em tableaux analítico:
    - > tableauxTree.makeAnalitic()				// torna o tableaux analítico
	    - () => ()