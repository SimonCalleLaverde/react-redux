const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;//return state + 1//To increment by the number passed into the <button>, instead of by 1
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

export default counterReducer;