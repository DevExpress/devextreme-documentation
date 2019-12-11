---
module: events
export: one
---
---
##### shortDescription
Attaches an event handler that is executed only once to the specified elements' descendants.

##### param(element): Node|Array<Node>
HTML elements to which to attach a handler.

##### param(eventName): String
An event name.

##### param(selector): String
A [CSS selector](https://www.w3schools.com/cssref/css_selectors.asp) used to filter the **element**'s descendants.

##### param(handler): function()
A handler to attach.      
Return **false** to stop the event's propagation.

---
The following parameters are passed to the **handler**:

- **event**: [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/')    
The event that caused the handler's execution.

- **extraParameters**: [Object](https://www.w3schools.com/js/js_objects.asp)  
Data passed as **extraParameters** to the [trigger(element, event, extraParameters)](/api-reference/50%20Common/utils/events/3%20Methods/trigger(element_event_extraParameters).md '/Documentation/ApiReference/Common/utils/events/Methods/#triggerelement_event_extraParameters') method when it is called to trigger the event.

<!----->

    // Modular approach
    import { one } from "devextreme/events";
    // ...
    one(document.getElementById("target"), "dxclick", "#elementID", function (event, extraParameters) {
        // Your code goes here
    });

    // Non-modular approach
    DevExpress.events.one(document.getElementById("target"), "dxclick", "#elementID", function (event, extraParameters) {
        // Your code goes here
    });