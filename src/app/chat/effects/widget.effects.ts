import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { combineLatest, concatMap } from 'rxjs/operators';

import * as fromAuth from '../../auth/reducers';
import { WidgetsActionTypes, Interact, MapToMessage } from '../actions/widgets.actions';
import { Send } from '../actions/messages.actions';
import { Message } from '../models/message';
import { ChatMessage } from '../models/chat-message';

@Injectable()
export class WidgetsEffects {
    @Effect()
    interact$ = this.actions$.pipe(
        ofType<Interact>(WidgetsActionTypes.Interact),
        combineLatest(this.store.select(fromAuth.getUser)),
        concatMap(([action, user]) => {
            const message: Message = {
                author: user.name,
                message: action.payload.selectedOption,
            };
            const chatMessage: ChatMessage = {
                ...message,
                id: action.payload.id,
                fromWidget: true,
            };

            return [
                new MapToMessage(chatMessage),
                new Send(message),
            ];
        })
    );

    constructor(private actions$: Actions, private store: Store<fromAuth.State>) {}
}
