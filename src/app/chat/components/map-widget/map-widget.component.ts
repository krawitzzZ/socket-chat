import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MapWidgetCommand } from '../../models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
    selector: 'chat-map-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./map-widget.component.html'),
    styleUrls: ['./map-widget.component.scss'],
})
export class MapWidgetComponent extends WidgetComponent implements OnInit {
    coordinates: { lat: number; lng: number } = { lat: 0, lng: 0 };

    ngOnInit(): void {
        const command = this.widget.command as MapWidgetCommand;

        this.coordinates = command.data;
    }
}
