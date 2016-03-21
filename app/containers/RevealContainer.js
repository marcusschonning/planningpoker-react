import React from 'react';
import { connect } from 'react-redux';
import { revealToggle } from '../actions';
import Card from '../components/Card'

const mapStateToProps = (state) => {
	return {
		//cards: state.planningpoker

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCardClick: (card) => {
			dispatch(toggleReveal(card));
		}
	}
}

class CardType extends React.Component {
	componentWillMount() {
		console.log('card will mount');
	}

    render() {
        return <Card {...this.props} />;
    }
}

const RevealContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardType)

export default RevealContainer
