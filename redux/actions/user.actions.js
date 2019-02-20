import Types from './index.actions';

export const loginAction = (username, password) => {
  return async (dispatch) => {
    const url = 'http://127.0.0.1:8000/users/login';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
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
};

export const signupAction = (signupInfo) => {
  return async (dispatch) => {
    const url = 'http://127.0.0.1:8000/users/signup';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: signupInfo.username,
        password: signupInfo.password,
        firstname: signupInfo.firstName,
        lastname: signupInfo.lastName,
        email: signupInfo.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // Response ok?
        dispatch({
          type: Types.SIGNUP_SUCCESS,
          user: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: Types.SIGNUP_FAILURE,
        });
      });
  };
};
