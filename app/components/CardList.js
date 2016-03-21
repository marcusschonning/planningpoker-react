import React from 'react';
import { Link } from 'react-router'
import CardContainer from '../containers/CardContainer'
require('../styles/cardList.scss')

const CardList = ({cards}) => (
	<div>
		<div className='desc'>
			<p>Select a card with the value you consider the task worth in time</p>
		</div>

		<div className='cardList'>
			{cards.map(card =>
				<Link to='/reveal' key={card.value}>
				<CardContainer key={card.value} value={card.value} show={card.show} />
			</Link>
			)}
		</div>
	</div>
)

export default CardList
