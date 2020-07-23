---
id: events.off(element, eventName, selector, handler)
module: events
export: off
---
---
##### shortDescription
Detaches the specified event handler attached using the [on(element, eventName, selector, data, handler)](/api-reference/50%20Common/utils/events/on(element_eventName_selector_data_handler).md '/Documentation/ApiReference/Common/utils/events/#onelement_eventName_selector_data_handler') or [on(element, eventName, selector, handler)](/api-reference/50%20Common/utils/events/on(element_eventName_selector_handler).md '/Documentation/ApiReference/Common/utils/events/#onelement_eventName_selector_handler') method.

##### param(element): Element | Array<Element>
HTML elements from which to detach a handler.

##### param(eventName): String
An event name.

##### param(selector): String
A <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">CSS selector</a> passed to the **on** method when attaching the handler.

##### param(handler): function()
The handler to detach.

---
    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", "#elementID", clickHandler);

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick", "#elementID", clickHandler);