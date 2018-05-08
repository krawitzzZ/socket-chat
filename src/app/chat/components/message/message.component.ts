import { ChangeDetectionStrategy, Input, Component } from '@angular/core';

import { Message } from '../../models/message';

@Component({
    selector: 'chat-message',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./message.component.html'),
    styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
    @Input()
    message: Message;

    @Input()
    isOwnedByUser: boolean;
}
