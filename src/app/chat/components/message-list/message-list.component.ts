import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../auth/models/user';
import { Message, MessageFromWidget } from '../../models/message';
import { Widget, InteractableWidget } from '../../models/widget';
import { ChatMessageType, ChatMessage } from '../../models/chat-message';
import { MessageComponent } from '../message/message.component';
import { WidgetComponent } from '../widget/widget.component';

@Component({
    selector: 'chat-message-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./message-list.component.html'),
    styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent {
    @Input()
    user: User;

    @Input()
    chatMessages: ChatMessage[];

    @Output()
    widgetInteracted = new EventEmitter();

    messageType = ChatMessageType;

    getChatMessageType(message: ChatMessage): ChatMessageType {
        let type: ChatMessageType;

        if (this.isMessage(message)) {
            type = this.messageType.Message;
        }

        if (this.isWidget(message)) {
            type = this.messageType.Widget;
        }

        if (this.isMessageFromWidget(message)) {
            type = this.messageType.MessageFromWidget;
        }

        return type;
    }

    onWidgetInteracted(interactedWidget: InteractableWidget): void {
        this.widgetInteracted.emit(interactedWidget);
    }

    private isMessage(listElement: any): listElement is Message {
        return <Message>listElement.message !== undefined;
    }

    private isWidget(listElement: any): listElement is Widget {
        return <Widget>listElement.command !== undefined;
    }

    private isMessageFromWidget(listElement: any): listElement is MessageFromWidget {
        return <MessageFromWidget>listElement.fromWidget !== undefined;
    }
}
