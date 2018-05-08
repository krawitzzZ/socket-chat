import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { AgmCoreModule } from '@agm/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ChatService } from './services/chat.service';
import { MessagesEffects } from './effects/messages.effects';
import { CommandsEffects } from './effects/commands.effects';
import { WidgetsEffects } from './effects/widget.effects';
import { reducers } from './reducers';
import { routes } from './routes';
import { environment } from '../../environments/environment';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CoreModule,
        NgxAutoScrollModule,
        StoreModule.forFeature('chat', reducers),
        EffectsModule.forFeature([WidgetsEffects, MessagesEffects, CommandsEffects]),
        AgmCoreModule.forRoot({
            apiKey: environment.googleAPIKey,
        }),
    ],
    providers: [
        ChatService,
    ],
    declarations: [
        ...CONTAINERS,
        ...COMPONENTS,
    ],
})
export class ChatModule {}
