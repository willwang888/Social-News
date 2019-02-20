import Types from '../actions/index.actions';

const user = (state = null, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return action.user;
      break;
    case Types.LOGIN_FAILURE:
      return null;
      break;
    default:
      return state;
  }
};

export default user;
