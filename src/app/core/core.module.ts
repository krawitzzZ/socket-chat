import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AppComponent, NotFoundComponent } from './containers';
import { LayoutComponent, SpinnerComponent } from './components';
import { RouterEffects } from './effects/router.effects';

export const COMPONENTS = [
    AppComponent,
    NotFoundComponent,
    LayoutComponent,
    SpinnerComponent,
];

@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        EffectsModule.forFeature([RouterEffects]),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class CoreModule {}
