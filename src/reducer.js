import { Map } from 'immutable';

//ActionTypes
export const types = {
  UPDATE_STATE : 'UPDATE_STATE',
};

//Actions
export const Actions = {
  updateState: (change) => ({
      type: types.UPDATE_STATE, change
  }),
};

const isFunction = (functionToCheck) => {
	const getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

//Action functions
const updateState = (state, change) => {
	if(isFunction(change)) change = change(state);
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

//store
const initialState = {
	currentValue: '0',
  operator: null,
  previousValue: 0,
};

export default function(state = new Map(initialState), action){
	switch(action.type){
		case types.UPDATE_STATE: {
			return updateState(state, action.change);
		}
		default: {
      return state;
		}
	}
}
