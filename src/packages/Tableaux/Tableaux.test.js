import FormulaProp from '../FormulaProp';
import Tableuax from './Tableaux';
import Graph from './Graph';

const formula = [
	'((p->q) -> ((q->r) -> ((p|q)->r)))',
	'(  (P | ( (! Q) & R)) -> ( (Q | ! R) -> P  ))',
	'((( p -> ((r-> s)| (q->t)) ) & (p & t) )& ((q|v) & (!s)))',
	'((( A -> (B| W) )&  (( ! ( B | P) )  & (W -> P))  )  ->    (! A ) )',
	' ( ( ! ((  (!A) | B ) & ( C | ( ! (A & B) ) ))) | ( ! ( A | (B &C) ) ) )',
	'(( ! ( !(( (! P) &Q) -> R ) ) |  ( ! ( P -> ((!P) - > Q )) ) )  | (! ( R -> (!Q)) )    )',
	'( ( ( !  ( ( ( ( ! A ) -> B ) & ( C -> ( D | E ) ) ) & ( D -> (! C) ) ) ) | ( ( ! A ) | ( ! E ) ) ) -> ( ( ! C )|B ) )',
]

function printTableaux(tree) {
	let display = `${tree.node.formule.toString()} ${tree.node.value}\n`;

	if (tree.left) {
		display += printTableaux(tree.left);
	}
	if (tree.right) {
		display += printTableaux(tree.right);
	}
	
	return display;
}

function printGraph(graph, p) {
	const node = graph.nodes[p];
	let display = `${node.formule.toString()} ${node.value}\n`;

	if (Number.isInteger(graph.vertices[p][1])) {
		display += printGraph(graph, graph.vertices[p][1]);
		if (Number.isInteger(graph.vertices[p][2])) {
			display += printGraph(graph, graph.vertices[p][2]);
		}
	}
	
	return display;
}

function printGraph2(graph, p) {
	const node = graph.nodes[p];
	let display = `x: ${node.position.x}, y: ${node.position.y}, o: ${node.orientation}\n`;

	if (Number.isInteger(graph.vertices[p][1])) {
		display += printGraph2(graph, graph.vertices[p][1]);
		if (Number.isInteger(graph.vertices[p][2])) {
			display += printGraph2(graph, graph.vertices[p][2]);
		}
	}
	
	return display;
}

describe('Testa', () => {
	// let i = 0;
	for (let i = 0; i < 7; i++ ){
		test(` o tableaux e grafo da formula ${i}`, () => {
			let formule = new FormulaProp(formula[i]);
			
			let tableaux = [];
			let graph = [];

			for  (let j = 0; j <= 1; j++) {
				tableaux[j] = new Tableuax(formule, j);
				graph[j] = new Graph(tableaux[j]);
				const resTab = printTableaux(tableaux[j].tree);
				const resGra = printGraph(graph[j], 0);
				const resGra2 = printGraph2(graph[j], 0);

				console.log(`	Tableaux\n${resTab}\n\n	Graph\n${resGra}\n\n${resGra2}`);
				expect(resTab).toBe(resGra);
			}
		})
	}

})
