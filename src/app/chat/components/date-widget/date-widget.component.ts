import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { DateWidgetCommand } from '../../models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
    selector: 'chat-date-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./date-widget.component.html'),
    styleUrls: ['./date-widget.component.scss'],
})
export class DateWidgetComponent extends WidgetComponent implements OnInit {
    dates: Array<string> = [];

    ngOnInit(): void {
        const command = this.widget.command as DateWidgetCommand;
        const startDate = moment(command.data);

        this.dates.push(startDate.format('dddd'));

        while (this.dates.length < 5) {
            const nextDate = moment(startDate.add(1, 'd'));

            if (nextDate.day() !== 6 && nextDate.day() !== 0) {
                this.dates.push(nextDate.format('dddd'));
            }
        }
    }
}
