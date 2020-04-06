import { GET_STATE } from '../1_actionTypes/stateActions';
import { SET_STATE } from '../1_actionTypes/stateActions';

const initialState = {
  text: 'starting text',
};

const testComponentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STATE:
      return {
        ...state,
      };

    case SET_STATE:
      return {
        ...state,
        text: payload,
      };

    default:
      return state;
  }
};

export default testComponentReducer;
