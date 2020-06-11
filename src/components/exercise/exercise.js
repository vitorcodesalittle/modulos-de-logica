import React from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * @param {{
 *    enunciate: string,
 *    
 * }} props 
 */
const Exercise = function(props) {
  return (
    <div>
      <p>{ props.enunciate }</p>
    </div>
  )
}

Exercise.propTypes = {
  enunciate: PropTypes.string.isRequired
}

export default Exercise;