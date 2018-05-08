import { Action } from '@ngrx/store';

import { Message } from '../models/message';

export enum MessagesActionTypes {
    Send = '[Messages] Send',
    Receive = '[Messages] Receive',
}

export class Send implements Action {
    readonly type = MessagesActionTypes.Send;

    constructor(public payload: Message) {}
}

export class Receive implements Action {
    readonly type = MessagesActionTypes.Receive;

    constructor(public payload: Message) {}
}

export type MessagesActionsUnion = Send | Receive;
