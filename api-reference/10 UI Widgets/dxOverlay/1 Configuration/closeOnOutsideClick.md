---
id: dxOverlay.Options.closeOnOutsideClick
type: Boolean | function(event)
default: false
---
---
##### shortDescription
Specifies whether to close the widget if a user clicks outside it.

##### param(event): event
The event that caused widget closing. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the widget should be closed; otherwise **false**.

---
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

    <!--JavaScript-->
    var widgetOptions = {
        // ...
        closeOnOutsideClick: function(e) {
            return e.target === $("#someElement").get()[0];
        }
    }

The **closeOnOutsideClick** function is called when a user clicks the widget or outside it.