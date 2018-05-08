import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { map, tap, filter, combineLatest } from 'rxjs/operators';

import * as fromAuth from '../../auth/reducers';

@Injectable()
export class RouterEffects {
    @Effect({ dispatch: false })
    redirectIfLoggedIn$ = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        map((action: RouterNavigationAction<RouterStateSnapshot>) => action.payload.routerState),
        filter((snap: RouterStateSnapshot) => this.urlsToRedirectFrom.includes(snap.url)),
        combineLatest(this.store.select(fromAuth.isLoggedIn)),
        tap(([snapshot, isLoggedIn]) => {
            if (isLoggedIn) {
                this.router.navigate(['/chat']);
            }
        })
    );

    private urlsToRedirectFrom: string[] = [
        '/',
        '/login',
    ];

    constructor(
        private actions$: Actions,
        private store: Store<fromAuth.State>,
        private router: Router
    ) {}
}
