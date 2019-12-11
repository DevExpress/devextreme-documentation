---
default: undefined
type: number | string | function
---
---
##### shortDescription
Specifies the width of the widget.

##### return: number|string
The widget width.

---
The option can hold a value of the following types.

- *numeric*  
The widget width in pixels.
- *string*  
A CSS measurement of the widget width (e.g., "55px", "80%", "auto" and "inherit").
- *function*  
The function returning the widget width. For example, see the following code. 

        <!--JavaScript-->width: function () { 
            return baseWidth - 10 + "%";
        }