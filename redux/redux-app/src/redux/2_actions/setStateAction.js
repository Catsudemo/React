import { SET_STATE } from '../1_actionTypes/stateActions';

export default function setState(newState) {
  return async dispatch => {
    dispatch({ type: SET_STATE, payload: newState });
  };
}

export { SET_STATE };
