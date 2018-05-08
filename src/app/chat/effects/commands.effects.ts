import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { CommandsActionTypes, Send } from '../actions/commands.actions';
import { ChatService } from '../services/chat.service';

@Injectable()
export class CommandsEffects {
    @Effect({ dispatch: false })
    sendCommand$ = this.actions$.pipe(
        ofType<Send>(CommandsActionTypes.Send),
        tap(action => this.chatService.sendCommand(action.payload))
    );

    constructor(private actions$: Actions, private chatService: ChatService) {}
}
