import React, { useState } from 'react';
import Exercise from '../exercise';

const ExerciseBuilder = function(props) {
  const [ formula, setFormula ] = useState("");
  const [ formulas, setFormulas ] = useState([]);

  const createFormula = () => {
    if (formula.length > 0) { // verificar se fórmula é válida
      setFormulas([ ...formulas, formula ])
      setFormula(""); // reseta campo
    }
  }

  return (
    <div>
      <input type="text"
        onChange={e => setFormula(e.target.value)}
        value={formula}
        data-testid="builder-input"/>
      <button onClick={createFormula}
        data-testid="builder-submit">Criar Fórmula</button>

      <div>
        {
          formulas.map((formula, idx) => (
            <Exercise enunciate={formula}
              key={idx}/>
            )
          )
        }
      </div>
    </div>
  )
}

ExerciseBuilder.propTypes = {

}

export default ExerciseBuilder;