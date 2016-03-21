import React from 'react';
require('../styles/card.scss');

//import possible containers
const Card = ({value, onCardClick, show}) => {
	var hideCard = '';
	var text = '';
	if (show) {
		hideCard = '';
		text = value;
	} else {
		hideCard = ' hideCard';
		text = 'Click to reveal'
	}

	return(
		<div className={'card' + hideCard} onClick={e => {
			onCardClick(value)
		}}>
			<h3>{text}</h3>

		</div>
	)
}

export default Card
