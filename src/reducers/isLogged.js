const isLoggedReducer = (state = false, action) => {//When our application first runs, make sure we are not logged in
	switch (action.type) {
		case "SIGN_IN":
			return !state
		default:
			return state;
	}
};

export default isLoggedReducer;