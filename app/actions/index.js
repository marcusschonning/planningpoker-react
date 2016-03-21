import fetch from 'isomorphic-fetch'
//Export actions to  reducer
//Asyncron dispatch (else just return an object to dispatch):
/*
export const getAllTodos = (dispatch) => {
	return (dispatch) => {
		fetch('./../app/api/getAll.php').then(function(res) {
			return res.json();
		}).then(function(todolist) {
			dispatch({
				type: 'REDUCER_TYPE',
				value
			});
		});
	}
}
*/
export const chooseCard = (card) => {
	console.log('choose card');
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
