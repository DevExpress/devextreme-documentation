When navigating through DevExtreme sources, you can find conditional types like the following:

    export type DxEvent<TNativeEvent = Event> = {} extends EventType ? (EventObject & TNativeEvent) : EventType;

    export type DxElement<T extends Element = HTMLElement> = {} extends Condition ? T : ElementWrapper<T>;

These conditional types enable integration with third-party libraries. You can ignore them. They resolve to built-in browser types: a specific `HTMLElement` or a browser `Event` extended with DevExtreme’s `EventObject` mixin.