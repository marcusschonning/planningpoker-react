import React from 'react';
import { Link } from 'react-router';
import RevealContainer from '../containers/RevealContainer';
require('../styles/reveal.scss');

const RevealCard = ({card}) => {
	if (!card) {
		return (
			<div className='revealContainer'>
				<Link to='/'>Choose a card</Link>
			</div>
		)
	}
	return(
	    <div className='revealContainer'>
	    	<Link to='/'>Choose again</Link>
			<RevealContainer show={card.show} key={card.value} value={card.value} />
	    </div>
	)
}


export default RevealCard;
