
/**
* Factory function that allows you to create a store. Returns an object with the following API:
*
*/
const createStore = reducer => {

	let state;
	let listeners = [];

	/**
	* Returns the current value of the state.
	*/
	const getState() => state;

	/**
	*
	*/
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	/**
	* Allows you to add a `listener` to the list of `listeners` inside this store.
	* Returns a method that allows you to `unbind` the listener.
	* Example usage:
	*
	* const listenerFunction = () => doStuffOnClick();
	* const unsubscribeListenerFunction = store.subscribe(listenerFunction);
	* // When you're ready to unsubscribe later...
	* unsubscribeListenerFunction();
	*/
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	};

	// Do an initial dispatch to make sure the state is ready for use.
	dispatch({});

	return { getState, dispatch, subscribe };
};

export default createStore;
