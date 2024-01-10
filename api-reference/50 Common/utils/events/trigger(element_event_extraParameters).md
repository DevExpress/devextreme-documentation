---
id: events.trigger(element, event, extraParameters)
module: events/index
export: trigger
---
---
##### shortDescription
Triggers an event for the specified elements. Allows you to pass custom parameters to event handlers.

##### param(element): Element | Array<Element>
HTML elements for which to trigger an event.

##### param(event): String | event
An event or its name.

##### param(extraParameters): Object
Additional parameters to be passed to event handlers.

---
---
##### jQuery

    // Modular approach
    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent", { timeout: 1000 });

    // Non-modular approach
    DevExpress.events.trigger(document.getElementById("target"), "customEvent", { timeout: 1000 });

##### Angular

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent", { timeout: 1000 });

##### Vue

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent", { timeout: 1000 });

##### React

    import { trigger } from "devextreme/events";
    // ...
    trigger(document.getElementById("target"), "customEvent", { timeout: 1000 });

---