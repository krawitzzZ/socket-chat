import { Action } from '@ngrx/store';

import { Widget, InteractableWidget } from '../models/widget';
import { ChatMessage } from '../models/chat-message';

export enum WidgetsActionTypes {
    Receive = '[Widgets] Receive',
    Interact = '[Widgets] Interact',
    MapToMessage = '[Widgets] MapToMessage',
}

export class Receive implements Action {
    readonly type = WidgetsActionTypes.Receive;

    constructor(public payload: Widget) {}
}

export class Interact implements Action {
    readonly type = WidgetsActionTypes.Interact;

    constructor(public payload: InteractableWidget) {}
}

export class MapToMessage implements Action {
    readonly type = WidgetsActionTypes.MapToMessage;

    constructor(public payload: ChatMessage) {}
}

export type WidgetsActionsUnion = Receive | Interact | MapToMessage;
