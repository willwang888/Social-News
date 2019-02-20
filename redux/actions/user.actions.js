import Types from './index.actions';

export const loginAction = (username, password) => {
  return async (dispatch) => {
    const url = 'http://127.0.0.1:8000/users/login';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // Response ok?
        dispatch({
          type: Types.LOGIN_SUCCESS,
          user: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: Types.LOGIN_FAILURE,
        });
      });
  };
}
