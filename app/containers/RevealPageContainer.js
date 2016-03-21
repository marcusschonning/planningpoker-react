import React from 'react';
import { connect } from 'react-redux';
import RevealCard from '../components/Reveal'

const mapStateToProps = (state) => {
	console.log(state.planningpoker)
	return {
		cards: state.planningpoker
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}
class RevealCardFetch extends React.Component {
    render() {
		return <RevealCard { ...this.props } />
    }
}

const RevealPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RevealCardFetch)

export default RevealPageContainer
