import { Routes } from '@angular/router';

import { LoginComponent } from './containers';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
];
