import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chat-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="not-found">
    <mat-card>
        <mat-card-title>404: Not Found</mat-card-title>
        <mat-card-content>
            <p>Hey! It looks like this page doesn't exist yet.</p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="primary" routerLink="/">Take Me Home</button>
        </mat-card-actions>
    </mat-card>
</div>
  `,
  styles: [
    `
    .not-found {
        margin: 0 auto;
        padding: 20px;
        max-width: 750px;
        text-align: center;
    }
  `,
  ],
})
export class NotFoundComponent {}
