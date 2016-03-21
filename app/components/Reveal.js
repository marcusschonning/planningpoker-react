import React from 'react';
import RevealContainer from '../containers/RevealContainer';
//import RevealPageContainer from '../containers/RevealPageContainer';

class RevealCard extends React.Component {
    render({ cards }) {
        return(
	        <div>
	        	<h1>RevealContainer</h1>
				<RevealPageContainer />
	        </div>
        )
    }
}

export default RevealCard;
