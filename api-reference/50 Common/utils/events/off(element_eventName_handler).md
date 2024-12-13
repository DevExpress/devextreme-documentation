---
id: events.off(element, eventName, handler)
module: common/core/events
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
---
##### jQuery

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", clickHandler);

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick", clickHandler);

##### Angular

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", clickHandler);

##### Vue

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", clickHandler);

##### React

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick", clickHandler);

---