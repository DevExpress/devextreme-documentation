---
id: events.off(element, eventName)
module: common/core/events
export: off
---
---
##### shortDescription
Detaches all handlers of the specified event from the specified elements.

##### param(element): Element | Array<Element>
HTML elements from which to detach handlers.

##### param(eventName): String
An event name.

---
---
##### jQuery

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick");

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"), "dxclick");

##### Angular

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick");

##### Vue

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick");

##### React

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"), "dxclick");

---