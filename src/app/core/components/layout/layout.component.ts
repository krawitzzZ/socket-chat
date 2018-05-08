import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'chat-layout',
    template: require('./layout.component.html'),
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    @Input()
    username = '';

    @Input()
    isLoggedIn = false;

    @Output()
    logout = new EventEmitter<any>();

    constructor(private router: Router) {}

    goToHomePage(): void {
        this.router.navigate(['/']);
    }

    handleAuthAction(): void {
        if (this.isLoggedIn) {
            this.logout.emit();

            return;
        }

        this.router.navigate(['/login']);
    }
}
