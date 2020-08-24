import React from 'react';
import Sketch from 'react-p5'

import FormulaProp from '../../../packages/FormulaProp';
import Tableaux from '../../../packages/Tableaux/Tableaux';
import Graph from '../../../packages/Tableaux/Graph';

const FORMULA = '((p->q) -> ((q->r) -> ((p|q)->r)))';

const TableauxExercise = function(props) {
	const formula = new FormulaProp(FORMULA);
	const tableaux = new Tableaux(formula, 0);
	const graph = new Graph(tableaux);

	const RADIUS = 15;
	const SCALE = 50;

	let xTrans, yTrans;

	function scale(val, d) {
		let res = 0;

		if (val < 0) {
			res = (val + d) * SCALE;
		}else if (val > 0) {
			res = (val - d) * SCALE;
		}

		return res;
	}

	function setup(p5) {
		p5.createCanvas(1000, 600);
		xTrans = p5.width / 2;
		yTrans = 0;
	}

	function draw(p5) {
		p5.background(100);
		p5.translate(xTrans, yTrans);

		if (p5.mouseIsPressed) {
			xTrans += p5.movedX;
			yTrans += p5.movedY;
		}

		drawConnections(p5);
		drawPoints(p5);
		drawSentence(p5);
	}

	function drawSentence(p5) {
		for (const node of graph.nodes) {
			p5.fill(0);
			p5.noStroke();

			p5.textSize(16);
			p5.textAlign(p5.LEFT, p5.CENTER);

			let xPos = scale(node.position.x, 1) + 15;
			let yPos = scale(node.position.y, 0);

			if (node.orientation < 0) {
				p5.textAlign(p5.RIGHT, p5.CENTER);
				xPos -= 30;
			}

			let sentence = node.formule.toString();
			sentence = `${node.isAtom 	? `V^( ${sentence} )` : `V^${sentence}`} = ${node.value}`

			p5.text(sentence, xPos, yPos);
		}
	}

	function drawConnections(p5) {
		p5.stroke(0);
		p5.strokeWeight(2);
		
		graph.vertices.forEach((vertices, i) => {
			let { x: x1, y: y1 } = graph.nodes[i].position;
			x1 = scale(x1, 1);
			y1 = scale(y1, 0);

			for (let j = 1; j < vertices.length; j++) {
				let t = vertices[j];

				let { x: x2, y: y2 } = graph.nodes[t].position;
				x2 = scale(x2, 1);
				y2 = scale(y2, 0);

				p5.line(x1, y1, x2, y2);
			}
		})
	}

	function drawPoints(p5) {
		p5.fill(200);
		p5.stroke(0);
		p5.strokeWeight(1);

		for (const node of graph.nodes) {
			const xPos = scale(node.position.x, 1);
			const yPos = scale(node.position.y, 0);

			p5.ellipse(xPos, yPos, RADIUS);
		}
	}

	return (
		<Sketch setup={setup} draw={draw} />
	)
}

export default TableauxExercise;