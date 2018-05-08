export enum SocketEvent {
    Message = 'message',
    Command = 'command',
}

export enum SocketInternalEvent {
    Connect = 'connect',
    Disconnect = 'disconnect',
    Error = 'error',
    ConnectError = 'connect_error',
    ConnectTimeout = 'connect_timeout',
}
