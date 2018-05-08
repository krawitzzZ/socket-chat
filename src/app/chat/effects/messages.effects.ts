import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { MessagesActionTypes, Send } from '../actions/messages.actions';
import { ChatService } from '../services/chat.service';

@Injectable()
export class MessagesEffects {
    @Effect({ dispatch: false })
    sendMessage$ = this.actions$.pipe(
        ofType<Send>(MessagesActionTypes.Send),
        tap(action => this.chatService.sendMessage(action.payload))
    );

    constructor(private actions$: Actions, private chatService: ChatService) {}
}
