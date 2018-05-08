export interface Message {
    author: string;
    message: string;
}

export interface MessageFromWidget extends Message {
    fromWidget: boolean;
}
