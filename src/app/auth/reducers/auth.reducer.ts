import { User } from '../models/user';
import { AuthActionsUnion, AuthActionTypes } from './../actions/auth.actions';

export interface State {
    isLoggedIn: boolean;
    user: User;
}

export const initialState: State = {
    isLoggedIn: false,
    user: null,
};

export function reducer(state: State = initialState, action: AuthActionsUnion): State {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
            };
        }

        case AuthActionTypes.Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getIsLoggedIn = (state: State) => state.isLoggedIn;
export const getUser = (state: State) => state.user;
