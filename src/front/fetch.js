export const login = async (email, password, dispatch) => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers : {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
}

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/token`, options);

  // handle any non-200 error codes
  if (!response.ok) {
    const data = await response.json();
    console.log(data.message);
    return {
      error: {
        status: response.status,
        statusText: response.statusText,
      }
    }
  }

  // if the response is a 200
  const data = await response.json();
  sessionStorage.setItem('token', data.access_token);
  dispatch({
    type: 'fetchedToken',
    payload: {
      message: data.message,
      token: data.access_token,
      isLoginSuccessful: true,
    }
  });
  return data;
};


export const logout = (dispatch) => {
  sessionStorage.removeItem('token');
  dispatch({
        type: 'loggedOut',
        payload: {
          message: null,
          token: null,
          isLoginSuccessful: false,
        }
      });
}
