import { MessagesActionsUnion, MessagesActionTypes } from './../actions/messages.actions';
import { Message } from '../models/message';

export interface State {
    messages: Message[];
}

export const initialState: State = {
    messages: [],
};

export function reducer(state: State = initialState, action: MessagesActionsUnion): State {
    switch (action.type) {
        case MessagesActionTypes.Send:
        case MessagesActionTypes.Receive: {
            return {
                ...state,
                messages: state.messages.concat(action.payload),
            };
        }

        default: {
            return state;
        }
    }
}

export const getMessages = (state: State) => state.messages;
