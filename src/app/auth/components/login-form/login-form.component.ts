import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Credentials } from '../../models/user';

@Component({
    selector: 'chat-login-form',
    template: require('./login-form.component.html'),
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    @Input()
    errorMessage: string | null;

    @Output()
    submitted = new EventEmitter<Credentials>();

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    submitForm(): void {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }
}
