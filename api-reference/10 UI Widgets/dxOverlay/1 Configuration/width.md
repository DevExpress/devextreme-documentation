---
default: function() {return $(window).width() * 0.8 }
type: number | string | function
---
---
##### shortDescription
The widget width in pixels.

##### return: number|string
The widget width.

---
The option can hold a value of the following types.

 - numeric - the widget width in pixels
 - string - a CSS measurement of the widget width (e.g., "55px", "80%", "auto" and "inherit")
 - function - the function returning the widget width (e.g., width:function(){ return baseWidth - 10 + "%"; })