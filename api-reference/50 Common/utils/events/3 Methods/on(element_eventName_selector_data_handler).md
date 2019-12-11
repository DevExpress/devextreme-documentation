---
module: events
export: on
---
---
##### shortDescription
Attaches an event handler to the specified elements.

##### param(element): Node|Array<Node>
An HTML element or an array of elements to which to attach the handler.

##### param(eventName): String
The event name.

##### param(selector): String
A selector to filter the element's descendants. If the selector is null or omitted, the event is always triggered on reaching the element.

##### param(data): Object
Data to be passed to the handler in [event.data](/api-reference/50%20Common/Object%20Structures/dxEvent/2%20Fields/data.md '/Documentation/ApiReference/Common/Object_Structures/dxEvent/Fields/#data') when the event is triggered.

##### param(handler): function()
A function to execute on triggering the event.

---
The following parameters are passed to the **handler** function:

- **element**  
 The HTML element on which the event was triggered.

- **extraParameters**  
 Additional parameters. See [UI Events](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/') for details.

The method should return a Boolean value: **true** to continue, or **false** to stop the event propagation.
 
The following example demonstrates how to attach a handler to the [dxhold](/api-reference/10%20UI%20Widgets/UI%20Events/dxhold.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxhold') event for all elements with `my-element` class:
    
    var dxholdHandler = function(element, extraParameters) {
        // Process element hold
        return true;
    }
    DevExpress.events.on(document, "dxhold", ".my-element", { timeout: 1000 }, dxholdHandler);