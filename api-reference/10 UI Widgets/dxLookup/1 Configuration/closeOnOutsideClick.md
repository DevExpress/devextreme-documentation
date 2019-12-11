---
default: false
type: boolean | function
---
---
##### shortDescription
A Boolean value specifying whether or not a widget is closed if a user clicks outside of the overlaying window.

##### return: boolean
The required option value.

---
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

    <!--JavaScript-->
    var lookupOptions = {
        // ...
        closeOnOutsideClick: function(e) {
            return e.target === $("#someElement").get()[0];
        }
    }