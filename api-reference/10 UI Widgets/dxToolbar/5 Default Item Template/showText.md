---
default: 'always'
acceptValues: 'always' | 'inMenu'
type: String
---
---
##### shortDescription
Specifies when to display the text for the widget item.

---
The text should be specified in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options') configuration object. 

[note]This option is available only for the dxButton [widget](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/widget.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#widget') that presents a toolbar item.

#include common-ref-enum with {
    enum: "`ToolbarItemShowTextMode`",
    values: "`Always` and `InMenu`"
}