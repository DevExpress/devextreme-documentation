---
id: EventInfo
module: common/core/events
export: EventInfo
generateTypeLink: 
type: Object
---
---
##### shortDescription
A type that contains fields common for all events (`component`, `element`, `model`).

---
Do not use [NativeEventInfo](/api-reference/40%20Common%20Types/13%20events/NativeEventInfo '/Documentation/ApiReference/Common_Types/events/#NativeEventInfo') if you specify this type.

    export interface EventInfo<TComponent> {
        readonly component: TComponent;
        readonly element: DxElement;
    }