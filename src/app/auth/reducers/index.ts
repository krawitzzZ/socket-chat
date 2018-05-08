import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from './auth.reducer';
import * as fromLogin from './login.reducer';

export interface AuthState {
    status: fromAuth.State;
    login: fromLogin.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
    status: fromAuth.reducer,
    login: fromLogin.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);
export const isLoggedIn = createSelector(selectAuthStatusState, fromAuth.getIsLoggedIn);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const selectLoginState = createSelector(selectAuthState, (state: AuthState) => state.login);
export const getLoginError = createSelector(selectLoginState, fromLogin.getError);
export const isLoginPending = createSelector(selectLoginState, fromLogin.isPending);
