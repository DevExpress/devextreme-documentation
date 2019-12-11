---
module: events/hold
type: event
---
---
##### shortDescription
Raised when the element is being held during a specified time.

##### param(event): jQuery.event
The standard jQuery event argument. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.

---
To specify the time span after which the event is raised, pass the object containing the timeout property to the function subscribing to the event.

    <!--JavaScript-->
    $("#myElement").on("dxhold", { timeout: 1000 }, function() {
        alert("The element is being held during 1000 milliseconds");
    });