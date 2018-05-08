import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { LandingModule } from './landing/landing.module';
import { AppComponent } from './core/containers/app/app.component';
import { routes } from './routes';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { CustomRouterStateSerializer } from './utils';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        StoreDevtoolsModule.instrument({
            name: 'NgRx DevTools',
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        CoreModule,
        LandingModule,
        AuthModule.forRoot(),
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
