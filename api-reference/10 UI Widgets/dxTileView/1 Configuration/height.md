---
default: 500
type: Number | String
---
---
##### shortDescription
Specifies the widget's height.

##### return: number|string
The widget's height.

---
This option accepts a value of one of the following types.

- **Number**  
The height of the widget in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }

Note that the **height** option of the [TileView](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/') widget does not support the "auto" value.