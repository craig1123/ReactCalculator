import { Map } from 'immutable';

//ActionTypes
export const types = {
	SET_STATE : 'SET_STATE',
  UPDATE_STATE : 'UPDATE_STATE',
  UPDATE_STATE_MULTIPLE : 'UPDATE_STATE_MULTIPLE',
};
//Actions
export const Actions = {
  updateState: (change) => ({
      type: types.UPDATE_STATE, change
  }),
  updateStateMultiple: (changes) => ({
      type: types.UPDATE_STATE_MULTIPLE, changes
  }),
	setState: (state) => ({
		type: types.SET_STATE, state
	}),
};

//Action functions
function setState(state, newState){
	return state.merge(newState);
}

function updateState(state, change){
	if(isFunction(change)){
    change = change(state);
  }
	if (change.spliceIndex !== undefined){
    return state.updateIn(change.key, (listToSplice) => {
      if(change.value)
        return listToSplice.splice(change.spliceIndex, change.remove, change.value);
      else
        return listToSplice.splice(change.spliceIndex, change.remove);
    });
  }
	if (change.addToArray !== undefined) {
    return state.updateIn(change.key, (list) => {
      return list.push(change.value)
    })
  }
	return state.updateIn(change.key, (value) => change.value);
}

function updateStateMultiple(state, changes){
  let currentState = state;
  for(const change of changes){
    currentState = updateState(currentState, change);
  }
  return currentState;
}

//other functions
function isFunction(functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

//store
const initialState = {

};

export default function(state = new Map(initialState), action){
	switch(action.type){
		case types.SET_STATE: {
			return setState(state, action.state);
		}
		case types.UPDATE_STATE: {
			return updateState(state, action.change);
		}
		case types.UPDATE_STATE_MULTIPLE: {
      return updateStateMultiple(state, action.changes);
		}
		default: {
      return state;
		}
	}
}
