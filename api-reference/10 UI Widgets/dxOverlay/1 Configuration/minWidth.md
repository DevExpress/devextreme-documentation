---
default: null
type: Number | String | function()
---
---
##### shortDescription
Specifies the minimum width the widget can reach while resizing.

##### return: Number|String
The minimum width value.

---
The option can hold a value of the following types.

 - numeric - the width in pixels
 - string - a CSS measurement of the width (e.g., "55px", "80%", "auto" and "inherit")
 - function - the function returning the width (e.g., width:function(){ return baseWidth - 10 + "%"; })