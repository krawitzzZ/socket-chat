import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Credentials, User } from '../models/user';

@Injectable()
export class AuthService {
    login({ username, password }: Credentials): Observable<User> {
        if (!username.trim() || !password.trim()) {
            return Observable.throw({ error: 'Invalid username or password' });
        }

        return Observable.of({ name: username });
    }

    logout(): Observable<boolean> {
        return Observable.of(true);
    }
}
