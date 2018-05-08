import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './containers';
import { LoginFormComponent } from './components';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

export const COMPONENTS = [
    LoginComponent,
    LoginFormComponent,
];

export const SERVICES = [
    AuthService,
    AuthGuard,
];

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects]),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: SERVICES,
        };
    }
}
