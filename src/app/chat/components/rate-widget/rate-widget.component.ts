import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { RateWidgetCommand } from '../../models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
    selector: 'chat-rate-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./rate-widget.component.html'),
    styleUrls: ['./rate-widget.component.scss'],
})
export class RateWidgetComponent extends WidgetComponent implements OnInit {
    assessments: number[] = [];

    ngOnInit(): void {
        const command = this.widget.command as RateWidgetCommand;
        const [startRate, endRate] = command.data;
        let start = startRate;

        this.assessments.push(start++);

        while (this.assessments[this.assessments.length - 1] < endRate) {
            this.assessments.push(start++);
        }
    }
}
