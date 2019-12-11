---
module: events
export: off
---
---
##### shortDescription
Detaches an event handler from the specified elements.

##### param(element): Node|Array<Node>
An HTML element or an array of elements from which to detach the handler.

##### param(eventName): String
The event name.

##### param(selector): String
A selector that must match the one originally passed to the [on()](/api-reference/50%20Common/utils/events/3%20Methods/on(element_eventName_selector_data_handler).md '/Documentation/ApiReference/Common/utils/events/Methods/#onelement_eventName_selector_data_handler') method when attaching the handler.

##### param(handler): function()
A handler to detach.

---
The following example demonstrates how to detach a handler from the [dxhold](/api-reference/10%20UI%20Widgets/UI%20Events/dxhold.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold') event for all elements with `my-element` class:

    var dxholdHandler = function() {
        // Process element hold
    }
    ...
    DevExpress.events.off(document, "dxhold", ".my-element", dxholdHandler);