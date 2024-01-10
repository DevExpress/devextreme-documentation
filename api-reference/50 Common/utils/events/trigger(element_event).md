---
id: events.trigger(element, event)
module: events/index
export: trigger
---
---
##### shortDescription
Triggers an event for the specified elements.

##### param(element): Element | Array<Element>
HTML elements for which to trigger an event.

##### param(event): String | event
An event or its name.

---
---
##### jQuery

    // Modular approach
    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

    // Non-modular approach
    DevExpress.events.trigger(document.getElementById("target"), "customEvent");

##### Angular

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

##### Vue

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

##### React

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

---