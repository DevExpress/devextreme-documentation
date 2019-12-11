---
default: false
type: Boolean | function(event)
---
---
##### shortDescription
Specifies whether to close the widget if a user clicks outside it.

##### param(event): event
The event that caused widget closing. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

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