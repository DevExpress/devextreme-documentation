---
default: null
type: Number | String | function()
---
---
##### shortDescription
Specifies the minimum height the widget can reach while resizing.

##### return: Number|String
The minimum height value.

---
The option can hold a value of the following types.

 - numeric - the height in pixels
 - string - a CSS measurement of the height (e.g., "55px", "80%", "auto" and "inherit")
 - function - the function returning the height (e.g., width:function(){ return baseWidth - 10 + "%"; })