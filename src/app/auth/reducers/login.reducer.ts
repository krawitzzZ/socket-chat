import { AuthActionTypes, AuthActionsUnion } from './../actions/auth.actions';

export interface State {
    error: string | null;
    isPending: boolean;
}

export const initialState: State = {
    error: null,
    isPending: false,
};

export function reducer(state: State = initialState, action: AuthActionsUnion): State {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                error: null,
                isPending: true,
            };
        }

        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                error: null,
                isPending: false,
            };
        }

        case AuthActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.payload.error,
                isPending: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const getError = (state: State) => state.error;
export const isPending = (state: State) => state.isPending;
