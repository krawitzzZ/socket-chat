import { Routes } from '@angular/router';

import { ChatComponent } from './containers';

export const routes: Routes = [
    { path: '', component: ChatComponent, pathMatch: 'full' },
];
