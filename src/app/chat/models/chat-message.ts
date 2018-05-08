import { Message, MessageFromWidget } from './message';
import { Widget, InteractableWidget } from './widget';

export enum ChatMessageType {
    Message = 0,
    Widget = 1,
    InteractedWidget = 2,
    MessageFromWidget = 3,
}

export type ChatMessage =
    (Message
    | MessageFromWidget
    | Widget
    | InteractableWidget)
    & { id: string };
