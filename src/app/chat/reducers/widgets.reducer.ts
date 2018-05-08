import { WidgetsActionsUnion, WidgetsActionTypes } from './../actions/widgets.actions';
import { Widget } from '../models/widget';

export interface State {
    widgets: Widget[];
}

export const initialState: State = {
    widgets: [],
};

export function reducer(state: State = initialState, action: WidgetsActionsUnion): State {
    switch (action.type) {
        case WidgetsActionTypes.Receive: {
            return {
                ...state,
                widgets: state.widgets.concat(action.payload),
            };
        }

        default: {
            return state;
        }
    }
}

export const getWidgets = (state: State) => state.widgets;
