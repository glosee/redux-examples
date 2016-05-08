
/**
* Factory function that allows you to create a store. Returns an object with three API methods: `getState` to return
* the current state of the store, `dispatch` to send an action to this store, and `subscribe` to listen to changes
* to this store.
*
* @param {Function} reducer - A reducer function that has the signature `(state, action) => state. This reducer should
*                             expect an action, and calculate then return the new `state` based on that action's type.
* @returns {Object} store - A store object that has the API described above, and that will manage its own state when
*                           actions are dispatched to it.
*/
const createStore = reducer => {

	/**
	* The internal state object that can only be interacted with through actions dispatched here, and the reducer that
	* was used to create this store.
	*/
	let state;

	/**
	* A list of all the listeners - in other words, a list of functions that will each get called every time an action
	* is dispatched to this store.
	*/
	let listeners = [];

	/**
	* Returns the current value of the state.
	*/
	const getState = () => state;

	/**
	* API method to send an action to this store. Will update the state by setting it to the result of calling the reducer
	* with the action that was passed in, then will call each of the `listeners` that were passed to `subscribe` to any
	* updates to this store.
	*
	*	@param {Object} action - An action that has the shape of { type [string], payload [any] }
	*/
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	/**
	* Allows you to add a `listener` to the list of `listeners` inside this store.
	* Returns a method that allows you to `unbind` the listener, which you may want to do when a component unmounts.
	*
	* Example usage:
	*
	* const listenerFunction = () => doStuffOnClick(store.getState());
	* const unsubscribeListenerFunction = store.subscribe(listenerFunction);
	* unsubscribeListenerFunction(); // ... when you're ready to unsubscribe later
	*
	* @param {Function} listener - A function that will get called every time an action is dispatched to this store.
	* @returns {Function} - An anonymous function that will unsubscribe the listener passed so it no longer gets called
	*                       when actions are dispatched to this store.
	*/
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	};

	/**
	* Do an initial dispatch to make sure the state is ready for use.
	*/
	dispatch({});

	/**
	* Return an object with the API methods above exposed, but with all internal state hidden.
	*/
	return { getState, dispatch, subscribe };
};

export default createStore;
