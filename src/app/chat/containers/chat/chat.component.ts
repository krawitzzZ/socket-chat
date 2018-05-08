import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../../auth/models/user';
import { Message } from '../../models/message';
import { Widget, InteractableWidget } from '../../models/widget';
import { SocketEvent } from '../../models/socket-event';
import { ChatMessage } from '../../models/chat-message';
import { ChatService } from '../../services/chat.service';
import { Send as SendMessage, Receive as ReceiveMessage } from '../../actions/messages.actions';
import { Send as SendCommand } from '../../actions/commands.actions';
import { Receive as ReceiveWidget, Interact as InteractWithWidget } from '../../actions/widgets.actions';
import * as fromAuth from '../../../auth/reducers';
import * as fromChat from '../../reducers';

@Component({
    selector: 'chat-chat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./chat.component.html'),
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
    user$: Observable<User> = this.store.pipe(select(fromAuth.getUser));
    chatMessages$: Observable<Array<ChatMessage>> = this.store.pipe(select(fromChat.getChatMessages));
    isConnected$: Observable<boolean> = this.chatService.getStatus();
    messagesSubscription: Subscription;
    widgetsSubscription: Subscription;

    constructor(
        private store: Store<fromAuth.State & fromChat.State>,
        private chatService: ChatService
    ) {}

    ngOnInit(): void {
        this.messagesSubscription = this.getMessagesSubscription();
        this.widgetsSubscription = this.getWidgetsSubscription();
    }

    onMessageSent(message: Message): void {
        if (message.message && message.message.trim()) {
            this.store.dispatch(new SendMessage(message));
        }
    }

    onCommandSent(event: Event): void {
        this.store.dispatch(new SendCommand(SocketEvent.Command));
    }

    onWidgetInteracted(interactedWidget: InteractableWidget): void {
        this.store.dispatch(new InteractWithWidget(interactedWidget));
    }

    ngOnDestroy(): void {
        this.messagesSubscription.unsubscribe();
        this.widgetsSubscription.unsubscribe();
        this.chatService.disconnect();
    }

    private getMessagesSubscription(): Subscription {
        return this.chatService
            .getMessages()
            .subscribe((message: Message) => this.store.dispatch(new ReceiveMessage(message)));
    }

    private getWidgetsSubscription(): Subscription {
        return this.chatService
            .getWidgets()
            .subscribe((widget: Widget) => this.store.dispatch(new ReceiveWidget(widget)));
    }
}
