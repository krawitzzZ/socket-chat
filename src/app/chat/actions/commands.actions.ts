import { Action } from '@ngrx/store';

import { SocketEvent } from '../models/socket-event';

export enum CommandsActionTypes {
    Send = '[Commands] Send',
}

export class Send implements Action {
    readonly type = CommandsActionTypes.Send;

    constructor(public payload: SocketEvent.Command) {}
}

export type CommandsActionsUnion = Send;
