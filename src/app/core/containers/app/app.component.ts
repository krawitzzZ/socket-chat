import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../auth/models/user';
import * as fromAuth from '../../../auth/reducers';
import { Logout } from '../../../auth/actions/auth.actions';

@Component({
    selector: 'chat-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./app.component.html'),
})
export class AppComponent {
    isLoggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.isLoggedIn));
    user$: Observable<User> = this.store.pipe(select(fromAuth.getUser));

    constructor(private store: Store<fromAuth.State>) {}

    onLogout(): void {
        this.store.dispatch(new Logout());
    }
}
