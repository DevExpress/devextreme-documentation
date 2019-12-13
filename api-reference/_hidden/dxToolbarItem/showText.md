---
id: dxToolbarItem.showText
acceptValues: 'always' | 'inMenu'
type: String
default: 'always'
---
---
##### shortDescription
Specifies when to display the text for the widget item.

---
The text should be specified in the [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#options') configuration object. 

[note]This option is available only for the dxButton [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#widget') that presents a toolbar item.

#include common-ref-enum with {
    enum: "`ToolbarItemShowTextMode`",
    values: "`Always` and `InMenu`"
}