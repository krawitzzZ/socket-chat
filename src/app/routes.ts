import { Routes } from '@angular/router';

import { LandingComponent } from './landing/containers';
import { LoginComponent } from './auth/containers';
import { NotFoundComponent } from './core/containers/not-found/not-found.component';

import { AuthGuard } from './auth/services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'chat',
        canActivate: [AuthGuard],
        loadChildren: './chat/chat.module#ChatModule',
    },
    { path: '**', component: NotFoundComponent },
];
