---
default: undefined
type: Number | String | function()
---
---
##### shortDescription
Specifies the height of the widget.

##### return: Number|String
The widget height in a numeric or string format.

---
The option can hold a value of the following types.

- number  
The height of the widget in pixels

- string  
A CSS measurement of the widget height (e.g., "55px", "80%", "auto" and "inherit")

- function  
A function returning the widget height (e.g., height:function(){ return baseHeight - 10 + "%"; })