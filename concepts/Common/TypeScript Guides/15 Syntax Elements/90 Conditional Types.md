When navigating through DevExtreme sources, you can find conditional types like this:

    export type DxEvent<TNativeEvent = Event> = {} extends EventType ? (EventObject & TNativeEvent) : EventType;

    export type DxElement<T extends Element = HTMLElement> = {} extends Condition ? T : ElementWrapper<T>;

These conditional types are needed for integrating with third-party libraries. 

In {Framework}, you can ignore them. They resolve to built-in BrowserTypes: specific `HTMLElement` and browser `Event` extended with DevExtreme’s `EventObject` mixin.