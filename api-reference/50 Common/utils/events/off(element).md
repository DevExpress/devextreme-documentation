---
id: events.off(element)
module: common/core/events
export: off
---
---
##### shortDescription
Detaches all handlers from the specified elements.

##### param(element): Element | Array<Element>
HTML elements from which to detach all handlers.

---
---
##### jQuery

    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"));

##### Angular

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

##### Vue

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

##### React

    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

---