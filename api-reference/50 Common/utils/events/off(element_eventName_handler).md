---
id: events.off(element, eventName, handler)
module: events
export: off
---
---
##### shortDescription
Detaches an event handler from the specified elements.

##### param(element): Element | Array<Element>
HTML elements from which to detach a handler.

##### param(eventName): String
An event name.

##### param(handler): function()
The handler to detach.

---
    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", clickHandler);

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick", clickHandler);