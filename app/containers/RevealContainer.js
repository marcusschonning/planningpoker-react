import React from 'react';
import { connect } from 'react-redux';
import { toggleReveal } from '../actions';
import Card from '../components/Card'

const mapStateToProps = (state) => {
	return {
		// state: state

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
