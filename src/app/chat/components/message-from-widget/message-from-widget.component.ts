import { Input, Component, ChangeDetectionStrategy } from '@angular/core';

import { Message } from '../../models/message';

@Component({
    selector: 'chat-message-from-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./message-from-widget.component.html'),
    styleUrls: ['./message-from-widget.component.scss'],
})
export class MessageFromWidgetComponent {
    @Input()
    message: Message;
}
