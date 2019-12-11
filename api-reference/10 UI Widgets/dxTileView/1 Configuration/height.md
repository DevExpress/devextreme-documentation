---
default: 500
type: Number | String
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
A CSS measurement of the widget height (e.g., "55px", "80%" and "inherit")

- function  
A function returning the widget height (e.g., height:function(){ return baseHeight - 10 + "%"; })

Note that the **height** option of the [TileView](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/') widget does not support the "auto" value.