---
id: events.one(element, eventName, data, handler)
module: events
export: one
---
---
##### shortDescription
Attaches an event handler that is executed only once to the specified elements. Allows you to pass custom data to the handler.

##### param(element): Element | Array<Element>
HTML elements to which to attach a handler.

##### param(eventName): String
An event name.

##### param(data): Object
Data to be passed to the handler. This data is available in the **data** field of the handler's first parameter.

##### param(handler): function()
The handler to attach.      
Return **false** to stop the event's propagation.

---
The following parameters are passed to the **handler**:

- **event**: [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/')    
The event that caused the handler's execution.

- **extraParameters**: <a href="https://www.w3schools.com/js/js_objects.asp" target="_blank">Object</a>  
Data passed as **extraParameters** to the [trigger(element, event, extraParameters)](/api-reference/50%20Common/utils/events/trigger(element_event_extraParameters).md '/Documentation/ApiReference/Common/utils/events/#triggerelement_event_extraParameters') method when it is called to trigger the event.

<!----->

    // Modular approach
    import { one } from "devextreme/events";
    // ...
    one(
        document.getElementById("target"), 
        "dxclick", 
        { value: "value1" }, 
        function (event, extraParameters) {
            console.log(event.data.value); // Outputs "value1"
        }
    );

    // Non-modular approach
    DevExpress.events.one(
        document.getElementById("target"), 
        "dxclick", 
        { value: "value1" }, 
        function (event, extraParameters) {
            console.log(event.data.value); // Outputs "value1"
        }
    );