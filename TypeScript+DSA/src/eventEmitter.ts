export class TypedEventEmitter<Events extends Record<string, any>> {
    private listeners = {} as {
        [K in keyof Events]?: Array<(payload: Events[K]) => void>;
    };

    on<K extends keyof Events>(
        event: K,
        listener: (payload: Events[K]) => void,
    ): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(listener);
    }

    emit<K extends keyof Events>(event: K, payload: Events[K]): void {
        const eventListeners = this.listeners[event];
        if (eventListeners) {
            eventListeners.forEach((listener) => listener(payload));
        }
    }

    off<K extends keyof Events>(
        event: K,
        listener: (payload: Events[K]) => void,
    ): void {
        const eventListeners = this.listeners[event];
        if (eventListeners) {
            this.listeners[event] = eventListeners.filter(
                (l) => l !== listener,
            );
        }
    }
}
