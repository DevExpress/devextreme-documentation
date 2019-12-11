---
module: events/hold
type: eventType
---
---
##### shortDescription
Raised when the element is being held during a specified time.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

---
To specify the time span after which the event is raised, pass the object containing the timeout property to the function subscribing to the event.

    <!--JavaScript-->
    $("#myElement").on("dxhold", { timeout: 1000 }, function() {
        alert("The element is being held during 1000 milliseconds");
    });

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')