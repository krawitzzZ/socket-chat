/* tslint:disable: no-console */

import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../utils';

export interface State {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = environment.production
    ? []
    : [logger, storeFreeze];
