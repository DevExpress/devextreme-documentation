---
default: null
type: number | string | function
---
---
##### shortDescription
Specifies the maximum height the widget can reach while resizing.

##### return: number|string
The maximum height value.

---
The option can hold a value of the following types.

 - numeric - the height in pixels
 - string - a CSS measurement of the height (e.g., "55px", "80%", "auto" and "inherit")
 - function - the function returning the height (e.g., width:function(){ return baseWidth - 10 + "%"; })