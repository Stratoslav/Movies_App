import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestSessionType, RequestToken } from '../types/AuthterizationTypes';
type sessionIdType = {
  session__id: string;
  success: boolean;
};
let isLogIn: sessionIdType  =
  localStorage.getItem('sessionId') !== null
    ? JSON.parse(localStorage.getItem('sessionId')!)
    : null;
const initialState = {
  guest: {} as GuestSessionType,
  requestToken: {} as RequestToken,
  sessionId: isLogIn as sessionIdType 
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getGuestData: (state, action: PayloadAction<GuestSessionType>) => {
      state.guest = action.payload;
    },
    getRequestToken: (state, action) => {
       console.log(action.payload)
      state.requestToken = action.payload;
    },
      getSessionId: (state, action) => {
        console.log(action.payload)
      state.sessionId = action.payload;
      localStorage.setItem('sessionId', JSON.stringify(state.sessionId));
    },
    deleteSession: (state, action) => {
      state.sessionId = {session__id: '',success: false };
      localStorage.setItem('sessionId', JSON.stringify(state.sessionId));
    }
  }
});

export const { reducer: AuthReducer, actions: AuthActions } = AuthSlice;
