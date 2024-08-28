
Most event arguments have a core part, either `EventInfo` or `NativeEventInfo`.

`EventInfo` is made for synthetic events and includes the following fields:

- `component`    
Reference to the component API.

- `element`    
Reference to the HTML element.

<!-- ... -->

    export interface EventInfo<TComponent> {
        readonly component: TComponent;
        readonly element: DxElement;
    }

`NativeEventInfo` is made for browser events and includes the following fields:

- `component`    
Reference to the component API.

- `element`    
Reference to the HTML element.

- `event`    
Native browser event with additional fields from `EventObject`.

<!-- ... -->

    interface NativeEventInfo<TComponent, TNativeEvent = Event> {
        readonly component: TComponent;
        readonly element: DxElement;
        readonly event?: EventObject & TNativeEvent;
    }

    interface EventObject {
        currentTarget: Element;
        data: any;
        delegateTarget: Element;
        target: Element;
        isDefaultPrevented(): boolean;
        isImmediatePropagationStopped(): boolean;
        isPropagationStopped(): boolean;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
    }

These types may include [conditional elements](/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Conditional_Types) for integration with third-party libraries.