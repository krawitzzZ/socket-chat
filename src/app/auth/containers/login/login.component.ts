import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Credentials } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';

@Component({
    selector: 'chat-login',
    template: require('./login.component.html'),
})
export class LoginComponent {
    error$ = this.store.select(fromAuth.getLoginError);
    isPending$ = this.store.select(fromAuth.isLoginPending);

    constructor(private store: Store<fromAuth.State>) {}

    onSubmit($event: Credentials): void {
        this.store.dispatch(new AuthActions.Login($event));
    }
}
