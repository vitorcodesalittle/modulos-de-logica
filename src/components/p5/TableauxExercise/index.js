import React from 'react';
import Sketch from 'react-p5'

import FormulaProp from '../../../packages/FormulaProp';
import Tableaux from '../../../packages/Tableaux/Tableaux';
import Graph from '../../../packages/Tableaux/Graph';

/* Raio do nó que será desenhado */
const NODE_RADIUS = 20;

/* Criar Tableaux e grafo */
const f = '((A | B) -> C)';
const formula = new FormulaProp(f);
const tableaux = new Tableaux(formula, 1);
const grafinho = new Graph(tableaux.tree);

/* Mock input */
const nodes = [
  { label: 'A', pos: [ 50, 50 ], selected: false },
  { label: 'B', pos: [30, 30 ], selected: false }
]
const edges = [
  { labelFrom: 'A', labelTo: 'B' }
]

function len(vec) {
  const [ x, y ] = vec;
  return Math.sqrt(x * x + y * y)
}

function drawNodes(p5) {
  nodes.forEach(({ label, pos: [ x, y], selected }) => {
    if (selected) {
      p5.circle(p5.mouseX, p5.mouseY, NODE_RADIUS)
    } else {
      p5.circle(x, y, NODE_RADIUS)
    }
  })
}

function sumVec(vecA, vecB) {
  const [ xA, yA ] = vecA;
  const [ xB, yB ] = vecB;
  return [xA + xB, yA + yB]
}

function vecTimesCte([x, y], cte) {
  return [cte * x, cte * y]
}

const findNodeWithLabel = label => nodes.find(n => n.label === label)

/* desenha linhas das arestas a partir das posições dos nodes */
function drawEdges(p5) {
  edges.forEach(e => {
    const { labelFrom, labelTo } = e;
    const nodeFrom = findNodeWithLabel(labelFrom);
    const nodeTo = findNodeWithLabel(labelTo);
    if (!nodeFrom || !nodeTo) {
      throw new Error("check labels")
    }
    const [ xFrom, yFrom ] = nodeFrom.selected ? [ p5.mouseX, p5.mouseY ] : nodeFrom.pos;
    const [ xTo, yTo ] = nodeTo.selected ? [ p5.mouseX, p5.mouseY] : nodeTo.pos;
    p5.line(xFrom, yFrom, xTo, yTo)
  })
}

function setup(p5) {
  p5.createCanvas(800, 400);

  const formula = ''
}

function draw(p5) {
  p5.background(220);
  drawEdges(p5);
  drawNodes(p5);
}

const TableauxExercise = function(props) {

  return (
      <Sketch setup={setup} draw={draw}/>
  )
}

export default TableauxExercise;