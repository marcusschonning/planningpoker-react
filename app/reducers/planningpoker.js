const card = (state, action) => {
	switch (action.type) {
		case 'SHOW_ALL_CARDS':
			return {
				value: state,
				show: true,
			}
		case 'CHOOSE_CARD':
			if(state.value === action.card) {
				console.log('state', state, 'action', action)
				return Object.assign({}, state, {
					show: false
				});
			}else {
				return Object.assign({}, state, {
					show: true
				});
			}
		default:
			return state
	}
}

const planningpoker = (state = [], action) => {
	switch (action.type) {
		case 'SHOW_ALL_CARDS':
			return action.cards.map(c => {
				return card(c, action);
			});
		case 'TOGGLE_REVEAL':
			console.log('action', action);
			return state;
		case 'CHOOSE_CARD':
			console.log('action', action, 'state', state);
			return state.map(c => {
				return card(c, action);
			})
		default:
			return state
	}
}

export default planningpoker
