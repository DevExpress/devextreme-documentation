---
default: undefined
type: number|string|function
---
---
##### shortDescription
Specifies the height of the widget.

##### return: number|string
The widget height.

---
This option can hold a value of the following types.

- number  
The height of the widget in pixels

- string  
A CSS measurement of the widget height (e.g., "55px", "80%", "auto" and "inherit")

- function  
A function returning the widget height (e.g., height:function(){ return baseHeight - 10 + "%"; })

[note]The widget's minimum height depends on the current theme. If the **height** option value is less than the minimum height, the widget height is set to the minimum value, ignoring the specified value. Below is a list of minimum calendar sizes depending on the current theme.

- Generic - 280x270
- Android - 290x260
- iOS 260x260
- Windows- 278x278