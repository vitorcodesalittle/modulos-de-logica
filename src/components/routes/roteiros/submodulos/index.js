import React from 'react';
import { TableauxExercise } from '../../../p5'
import { TableauxTheory } from '../../../theory';

const SubmoduloMap = {
  'mod1/mod1.4': {
    ExerciseComponent: TableauxExercise,
    TheoryComponent: TableauxTheory,
  },
}

export default function (props) {

  const { modulo, submodulo } = props.match.params;

  if (!SubmoduloMap[`${modulo}/${submodulo}`]) {
    return (
      <h1>Submodulo não encontrado</h1>
    )
  }

  const { ExerciseComponent, TheoryComponent } = SubmoduloMap[`${modulo}/${submodulo}`]

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ width: '30%'}}>
        <TheoryComponent/>
      </div>
      <div style={{ width: '30%'}}>
        <ExerciseComponent/>
      </div>
    </div>
  )
}
