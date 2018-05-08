import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromMessages from './messages.reducer';
import * as fromWidgets from './widgets.reducer';
import * as fromChatMessages from './chat-messages.reducer';

export interface ChatState {
    messages: fromMessages.State;
    widgets: fromWidgets.State;
    'chat-messages': fromChatMessages.State;
}

export interface State extends fromRoot.State {
    chat: ChatState;
}

export const reducers: ActionReducerMap<ChatState> = {
    messages: fromMessages.reducer,
    widgets: fromWidgets.reducer,
    'chat-messages': fromChatMessages.reducer,
};

export const selectChatState = createFeatureSelector<ChatState>('chat');

export const selectMessagesStatusState = createSelector(
    selectChatState,
    (state: ChatState) => state.messages
);
export const getMessages = createSelector(selectMessagesStatusState, fromMessages.getMessages);

export const selectWidgetsStatusState = createSelector(
    selectChatState,
    (state: ChatState) => state.widgets
);
export const getWidgets = createSelector(selectWidgetsStatusState, fromWidgets.getWidgets);

export const selectChatMessagesStatusState = createSelector(
    selectChatState,
    (state: ChatState) => state['chat-messages']
);
export const getChatMessages = createSelector(selectChatMessagesStatusState, fromChatMessages.getChatMessages);
