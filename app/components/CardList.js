import React from 'react';
import { Link } from 'react-router'
import CardContainer from '../containers/CardContainer'

const CardList = ({cards}) => (
  <div>
  	<h2>This is a cardlist</h2>
  	{cards.map(card =>
  		<Link to='/reveal' key={card.value}>
			<CardContainer key={card.value} value={card.value} />
		</Link>
  	)}
  </div>
)

export default CardList
