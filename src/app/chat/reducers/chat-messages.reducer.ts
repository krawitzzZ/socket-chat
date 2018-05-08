import * as uuid from 'uuid';

import { WidgetsActionsUnion, WidgetsActionTypes } from './../actions/widgets.actions';
import { MessagesActionsUnion, MessagesActionTypes } from './../actions/messages.actions';
import {
    Widget,
    InteractableWidget,
    RateWidgetCommand,
    MapWidgetCommand,
    DateWidgetCommand,
    CompleteWidgetCommand,
} from '../models/widget';
import { Message } from '../models/message';
import { ChatMessage } from '../models/chat-message';

export interface State {
    chatMessages: Array<ChatMessage>;
}

export const initialState: State = {
    chatMessages: [],
};

export function reducer(
    state: State = initialState,
    action: MessagesActionsUnion | WidgetsActionsUnion
): State {
    switch (action.type) {
        case MessagesActionTypes.Send:
        case MessagesActionTypes.Receive:
        case WidgetsActionTypes.Receive: {
            return {
                ...state,
                chatMessages: state.chatMessages.concat({
                    id: uuid.v4(),
                    ...action.payload,
                }),
            };
        }

        case WidgetsActionTypes.Interact: {
            const interactedWidget = action.payload;
            const chatMessages = getChatMessages(state).map(
                msg => (msg.id === interactedWidget.id ? interactedWidget : msg)
            );

            return {
                ...state,
                chatMessages,
            };
        }

        case WidgetsActionTypes.MapToMessage: {
            const widget = action.payload;
            const chatMessages = getChatMessages(state).map(
                msg => (msg.id === widget.id ? widget : msg)
            );

            return {
                ...state,
                chatMessages,
            };
        }

        default: {
            return state;
        }
    }
}

export const getChatMessages = (state: State) => state.chatMessages;
