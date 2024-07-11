Each component has event types that define arguments for handling events. Naming convention is the following: the argument type of the `contentReady` event handler is `ContentReadyEvent`.

Event types are based on common parts:

    export type AppointmentClickEvent = Cancelable & NativeEventInfo<dxScheduler, KeyboardEvent | MouseEvent | PointerEvent> & TargetedAppointmentInfo & {
        readonly appointmentElement: DxElement;
    };

### Common Event Parts

Events are union types built from common and specific parts:

    export type AppointmentTooltipShowingEvent = Cancelable & EventInfo<dxScheduler> & {
        readonly targetElement: DxElement;
        readonly appointments: AppointmentTooltipShowingAppointmentInfo[];
    };

    export type CellContextMenuEvent = NativeEventInfo<dxScheduler, MouseEvent | PointerEvent | TouchEvent> & {
        readonly cellData: any;
        readonly cellElement: DxElement;
    };

### EventInfo and NativeEventInfo

Most event arguments have a core part, either `EventInfo` or `NativeEventInfo`.

`EventInfo` is for synthetic events and includes the following fields:

- `component`    
Reference to the component API.

- `element`    
Reference to the HTML element.

<!-- ... -->

    export interface EventInfo<TComponent> {
        readonly component: TComponent;
        readonly element: DxElement;
    }

`NativeEventInfo` is for browser events and includes the following fields:

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

These types may include conditional elements for integration with third-party libraries. In React, they resolve to built-in browser types.