---
id: NativeEventInfo
module: common/core/events
export: NativeEventInfo
generateTypeLink: 
type: Object
---
---
##### shortDescription
A type that contains fields common for all events (`component`, `element`, `model`) and the `event` field.

---
Do not use [EventInfo](/api-reference/40%20Common%20Types/13%20events/EventInfo '/Documentation/ApiReference/Common_Types/events/#EventInfo') if you specify this type.

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