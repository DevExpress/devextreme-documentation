---
##### merge

##### shortDescription
Specifies the view's width.

---
This property accepts a value of one of the following types:

- **Number**  
The width in pixels.

- **String**  
A CSS-accepted measurement of width. For example, `"55px"`, `"auto"`, `"inherit"`. Do not set the width in percent.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->width: function() {
            return window.innerWidth / 1.5;
        }