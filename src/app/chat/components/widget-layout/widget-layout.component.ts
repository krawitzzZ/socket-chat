import { Component, Input } from '@angular/core';

@Component({
    selector: 'chat-widget-layout',
    template: require('./widget-layout.component.html'),
    styleUrls: ['./widget-layout.component.scss'],
})
export class WidgetLayoutComponent {
    @Input()
    title: string = null;

    @Input()
    isVisible: boolean;
}
