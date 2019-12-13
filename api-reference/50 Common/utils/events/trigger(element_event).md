---
id: events.trigger(element, event)
module: events
export: trigger
---
---
##### shortDescription
Triggers an event for the specified elements.

##### param(element): Node | Array<Node>
HTML elements for which to trigger an event.

##### param(event): String | event
An event or its name.

---
    // Modular approach
    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent");

    // Non-modular approach
    DevExpress.events.trigger(document.getElementById("target"), "customEvent");