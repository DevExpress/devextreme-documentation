---
module: events
export: trigger
---
---
##### shortDescription
Executes all handlers of a given event type attached to the specified elements.

##### param(element): Node|Array<Node>
An HTML element or an array of elements to which the handlers to execute are attached.

##### param(event): String|event
The event or its name.

##### param(extraParameters): Object
Additional parameters to pass to the event handler.

---
The following code executes all [dxhold](/api-reference/10%20UI%20Widgets/UI%20Events/dxhold.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold') event handlers of the element with the "myElement" id:

    var element = document.getElementById("myElement");
    DevExpress.events.trigger(element, "dxhold", { timeout: 1000 });