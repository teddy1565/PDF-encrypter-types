interface IPCValidChannelMap {
    startup_test: string;
}

export type IPCValidChannel = keyof IPCValidChannelMap;
