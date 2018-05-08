import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as ioClient from 'socket.io-client';

import { environment } from '../../../environments/environment';
import { Message } from '../models/message';
import { Widget } from '../models/widget';
import { SocketEvent, SocketInternalEvent } from '../models/socket-event';

@Injectable()
export class ChatService implements OnDestroy {
    private socketUrl: string = environment.socketUrl;
    private socket: any;

    constructor() {
        this.initSocket();
    }

    sendMessage(message: Message): void {
        this.socket.emit(SocketEvent.Message, message);
    }

    sendCommand(command: SocketEvent): void {
        this.socket.emit(command);
    }

    getStatus(): Observable<boolean> {
        return Observable.create(observer => {
            this.socket.on(SocketInternalEvent.Connect, () => observer.next(this.socket.connected));
            this.socket.on(SocketInternalEvent.Disconnect, () => observer.next(this.socket.connected));
        });
    }

    getMessages(): Observable<Message> {
        return Observable.create(observer =>
            this.socket.on(SocketEvent.Message, (message: Message) => observer.next(message))
        );
    }

    getWidgets(): Observable<Widget> {
        return Observable.create(observer =>
            this.socket.on(SocketEvent.Command, (command: Widget) => observer.next(command))
        );
    }

    disconnect(): void {
        this.socket.disconnect();
    }

    ngOnDestroy(): void {
        this.disconnect();
    }

    private initSocket(): void {
        this.socket = ioClient(this.socketUrl, { transports: ['websocket'] });

        this.socket.on(SocketInternalEvent.Error, err =>
            console.error(SocketInternalEvent.Error, err)
        );

        this.socket.on(SocketInternalEvent.ConnectError, err =>
            console.error(SocketInternalEvent.ConnectError, err)
        );
    }
}
