import { AppDispatch } from './../redux/store';

import { apiKey } from './../Components/ApiKey';
import axios from 'axios';
import { AuthActions } from '../redux/authSlice';

export const getGuestSession = (dispatch: AppDispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
    )
    .then(({ data }) => dispatch(AuthActions.getGuestData(data)));
};

export const getAuthUser = async (
  requestToken: string,
  dispatch: AppDispatch
) => {
  await axios
    .post(
      `
https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
      { request_token: requestToken }
    )
    .then(({ data }) => {
      dispatch(AuthActions.getSessionId(data));
    });
};

export const RequestTokenApi = (dispatch: AppDispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`
    )
    .then(({ data }) => dispatch(AuthActions.getRequestToken(data)));
};

export const DeleteSessionApi = async (
  sessionId: any,
  dispatch: AppDispatch
) => {
  console.log(sessionId.session_id);
  const config = {
    data: {
      session_id: sessionId.session_id
    }
  };

  await axios
    .delete(
      `https://api.themoviedb.org/3/authentication/session?api_key=${apiKey}`,
      config
    )
    .then(({ data }) => {
      dispatch(AuthActions.deleteSession(data));
    });
};
