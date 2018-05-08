import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
    @Effect()
    login$ = this.actions$.pipe(
        ofType<Login>(AuthActionTypes.Login),
        map(action => action.payload),
        switchMap((credentials: Credentials) =>
            this.authService
                .login(credentials)
                .pipe(
                    map(user => new LoginSuccess({ user })),
                    catchError(error => Observable.of(new LoginFailure(error)))
                )
        )
    );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        tap(() => this.router.navigate(['/chat']))
    );

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$.pipe(
        ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
        tap(() => this.router.navigate(['/login']))
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}
}
