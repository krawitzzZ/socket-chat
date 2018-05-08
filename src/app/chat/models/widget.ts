import { EventEmitter } from '@angular/core';

export enum WidgetType {
    Date = 'date',
    Map = 'map',
    Rate = 'rate',
    Complete = 'complete',
}

export interface DateWidgetCommand {
    type: WidgetType;
    data: string;
}

export interface MapWidgetCommand {
    type: WidgetType;
    data: { lat: number; lng: number };
}

export interface RateWidgetCommand {
    type: WidgetType;
    data: [number, number];
}

export interface CompleteWidgetCommand {
    type: WidgetType;
    data: [string, string];
}

export interface Widget {
    author: string;
    command: DateWidgetCommand | MapWidgetCommand | RateWidgetCommand | CompleteWidgetCommand;
}

export interface InteractableWidget extends Widget {
    id: string;
    isInteracted?: boolean;
    selectedOption?: any;
}

export interface InteractableWidgetComponent {
    widget: InteractableWidget;
    interacted: EventEmitter<InteractableWidget>;
    widgetType: typeof WidgetType;
    interact(selectedOption: any): void;
}
