import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestSessionType, RequestToken } from '../types/AuthorizationTypes';
type sessionIdType = {
  session__id: string;
  success: boolean;
};
let isLogIn: sessionIdType | null =
  localStorage.getItem('sessionId') !== null
    ? JSON.parse(localStorage.getItem('sessionId')!)
    : null;
const initialState = {
  guest: {} as GuestSessionType,
  requestToken: {} as RequestToken,
  sessionId: isLogIn as sessionIdType | null
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getGuestData: (state, action: PayloadAction<GuestSessionType>) => {
      state.guest = action.payload;
    },
    getRequestToken: (state, action) => {
  
      state.requestToken = action.payload;
    },
    getSessionId: (state, action) => {
      state.sessionId = action.payload;
      localStorage.setItem('sessionId', JSON.stringify(state.sessionId));
    },
    deleteSession: (state, action) => {
      state.sessionId = null;
      localStorage.setItem('sessionId', JSON.stringify(state.sessionId));
    }
  }
});

export const { reducer: AuthReducer, actions: AuthActions } = AuthSlice;
