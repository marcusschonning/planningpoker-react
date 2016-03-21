export const chooseCard = (card) => {
	return {
		type: 'CHOOSE_CARD',
		card
	}
}

export const showAllCards = (cards) => {
	return {
		type: 'SHOW_ALL_CARDS',
		cards
	}
}

export const toggleReveal = (card) => {
	return {
		type: 'TOGGLE_REVEAL',
		card
	}
}
