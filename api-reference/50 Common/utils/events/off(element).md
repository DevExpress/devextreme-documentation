---
id: events.off(element)
module: events
export: off
---
---
##### shortDescription
Detaches all handlers from the specified elements.

##### param(element): Element | Array<Element>
HTML elements from which to detach all handlers.

---
    // Modular approach
    import { off } from "devextreme/events";
    // ...
    off(document.getElementById("target"));

    // Non-modular approach
    DevExpress.events.off(document.getElementById("target"));