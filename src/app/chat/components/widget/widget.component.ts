import { ChangeDetectionStrategy, Input, Output, Component, EventEmitter } from '@angular/core';

import { WidgetType, InteractableWidget, InteractableWidgetComponent } from '../../models/widget';

@Component({
    selector: 'chat-widget',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./widget.component.html'),
    styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements InteractableWidgetComponent {
    @Input()
    widget: InteractableWidget;

    @Output()
    interacted = new EventEmitter<InteractableWidget>();

    widgetType = WidgetType;

    interact(selectedOption: any): void {
        const interactedWidget: InteractableWidget = {
            ...this.widget,
            isInteracted: true,
            selectedOption,
        };

        this.onWidgetInteracted(interactedWidget);
    }

    onWidgetInteracted(interactedWidget: InteractableWidget): void {
        this.interacted.emit(interactedWidget);
    }
}
