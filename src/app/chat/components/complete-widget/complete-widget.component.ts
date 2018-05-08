import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CompleteWidgetCommand } from '../../models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
    selector: 'chat-complete-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./complete-widget.component.html'),
    styleUrls: ['./complete-widget.component.scss'],
})
export class CompleteWidgetComponent extends WidgetComponent implements OnInit {
    options: string[] = [];

    ngOnInit(): void {
        const command = this.widget.command as CompleteWidgetCommand;
        this.options = command.data;
    }
}
