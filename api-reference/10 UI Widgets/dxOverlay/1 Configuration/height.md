---
default: function() { return $(window).height() * 0.8 }
type: Number | String | function()
---
---
##### shortDescription
The height of the widget in pixels.

##### return: Number|String
The widget height.

---
This option accepts a value of one of the following types.

- **Number**  
The height of the widget in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }