import React from 'react';
import { connect } from 'react-redux';
import { showAllCards } from '../actions';
import CardList from '../components/CardList'

const mapStateToProps = (state) => {
	return {
		cards: state.planningpoker
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCards: (cards) => {
			dispatch(showAllCards(cards));
		}
	}
}


class CardListFetcher extends React.Component {
    componentWillMount(dispatch) {
    	this.props.setCards([1, 2, 3, 5, '8+']);
    	console.log('willmount');
    }

    render() {
		return <CardList { ...this.props } />
    }
}

const CardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardListFetcher)

export default CardContainer
