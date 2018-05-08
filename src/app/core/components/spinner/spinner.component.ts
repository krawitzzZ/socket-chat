import { Component, Input } from '@angular/core';

@Component({
    selector: 'chat-spinner',
    template: `
        <mat-spinner *ngIf="isVisible" [diameter]="diameter" class="spinner"></mat-spinner>
    `,
    styles: [`
        .spinner {
            margin: 10px auto !important;
        }
    `],
})
export class SpinnerComponent {
    @Input()
    isVisible: boolean;

    @Input()
    diameter = 50;
}
