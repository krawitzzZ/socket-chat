import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../../../auth/models/user';
import { Message } from '../../models/message';

@Component({
    selector: 'chat-message-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./message-form.component.html'),
    styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent {
    @Input()
    set isDisabled(value: boolean) {
        if (value) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    get isDisabled(): boolean {
        return this.form.disabled;
    }

    @Input()
    user: User;

    @Output()
    messageSent = new EventEmitter<Message>();

    @Output()
    commandSent = new EventEmitter<any>();

    form: FormGroup = new FormGroup({ message: new FormControl('') });

    sendMessage(event: Event): void {
        event.stopPropagation();

        if (this.form.valid) {
            this.messageSent.emit({
                author: this.user.name,
                ...this.form.value,
            });

            this.form.reset();
        }
    }

    sendCommand(event: Event): void {
        event.stopPropagation();
        this.commandSent.emit();
    }
}
