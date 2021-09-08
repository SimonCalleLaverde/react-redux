export const increment = (numberToChangeBy) => {
	return {
		type: "INCREMENT",
		payload: numberToChangeBy//data//To increment by the number passed into the <button>, instead of by 1
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT"
	};
};