---
default: undefined
type: number | string | function
---
---
##### shortDescription
Specifies the height of the widget.

##### return: number|string
The widget height.

---
The option can hold a value of the following types.

- number  
The height of the widget in pixels

- string  
A CSS measurement of the widget height (e.g., "55px", "80%", "auto" and "inherit")

- function  
A function returning the widget height, e.g.,

        <!--JavaScript-->height: function () {
            return baseHeight - 10 + "%";
        });