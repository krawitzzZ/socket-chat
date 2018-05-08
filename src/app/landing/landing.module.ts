import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './containers';
import { GreetComponent } from './components';

export const COMPONENTS = [
    LandingComponent,
    GreetComponent,
];

@NgModule({
    imports: [
        RouterModule,
        SharedModule,
    ],
    declarations: COMPONENTS,
})
export class LandingModule {}
