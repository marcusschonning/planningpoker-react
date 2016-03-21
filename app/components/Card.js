import React from 'react';

//import possible containers
const Card = ({value, onCardClick}) => (
  <div className='card' onClick={e => {
  	onCardClick(value)
  }}>
  	<h3>This is a card {value}</h3>
  </div>
)

export default Card
