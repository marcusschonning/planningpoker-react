import React from 'react';
import { connect } from 'react-redux';
import { chooseCard } from '../actions';
import Card from '../components/Card';


const mapStateToProps = (state) => {
	return {
		state: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCardClick: (value) => {
			dispatch(chooseCard(value));
		}
	}
}

class CardType extends React.Component {
    render() {
        return <Card {...this.props} />;
    }
}

const CardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardType)

export default CardContainer
