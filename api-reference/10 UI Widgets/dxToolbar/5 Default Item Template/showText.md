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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ToolbarItemShowTextMode` enum. This enum accepts the following values: `Always` and `InMenu`.