const card = (state, action) => {
	switch (action.type) {
		case 'SHOW_ALL_CARDS':
			return {
				value: state,
				show: true,
				choosen: false
			}
		case 'CHOOSE_CARD':
			if(state.value === action.card) {
				return Object.assign({}, state, {
					show: false,
					choosen: true
				});
			}else {
				return Object.assign({}, state, {
					show: true,
					choosen: false
				});
			}
		case 'TOGGLE_REVEAL':
			if(state.value === action.card) {
				return Object.assign({}, state, {
					show: !state.show,
				});
			}else {
				return Object.assign({}, state, {
					show: true,
					choosen: false
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
			return state.map(c => {
				return card(c, action)
			});
		case 'CHOOSE_CARD':
			return state.map(c => {
				return card(c, action);
			})
		default:
			return state
	}
}

export default planningpoker
