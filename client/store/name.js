import axios from 'axios';

const initialState = {
	name: ''
}

const UPDATE_NAME = 'UPDATE_NAME';

export function updateName (name) {
  const action = { type: UPDATE_NAME, name };
  return action;
}

function nameReducer (state = initialState, action) {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
    	return state;
	}
}

export default nameReducer; 