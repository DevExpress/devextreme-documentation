---
default: false
type: boolean | function
---
---
##### shortDescription
A Boolean value specifying whether or not the widget is closed if a user clicks outside of the overlapping window.

##### param(event): jQueryEvent
Holds the jQuery event that caused widget closing.

##### return: Boolean
The required option value.

---
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

    <!--JavaScript-->
    var widgetOptions = {
        // ...
        closeOnOutsideClick: function(e) {
            return e.target === $("#someElement").get()[0];
        }
    }